import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";

const useNotesStore = create((set, get) => ({
  notes: [],
  loading: false,
  isRateLimited: false,
  fetchNotes: async () => {
    set({ loading: true });
    try {
      const res = await axiosInstance.get("/notes");
      set({ notes: res.data, isRateLimited: false });
    } catch (error) {
      if (error.response?.status === 429) {
        set({ isRateLimited: true });
      } else {
        toast.error(error.response?.data?.message || "Failed to fetch notes");
      }
    } finally {
      set({ loading: false });
    }
  },
  setNotes: (notes) => set({ notes }),
  deleteNote: async (id) => {
    if (!window.confirm("Are you sure you want to delete this note?")) return;
    try {
      await axiosInstance.delete(`/notes/${id}`);
      set({ notes: get().notes.filter((note) => note._id !== id) });
      toast.success("Note deleted successfully");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete note");
    }
  },
  updateNote: async (id, data) => {
    try {
        await axiosInstance.put(`/notes/${id}`, data);
        toast.success("Note updated successfully");
        return { success: true };
    } catch (error) {
        toast.error(error.response?.data?.message || "Failed to update note");
        if (error.response?.status === 429) {
        toast.error("Slow down! You're updating notes too fast", {
            duration: 4000,
            icon: "💀",
        });
        }
        return { success: false };
    }},
    fetchNote: async (id) => {
    try {
        const res = await axiosInstance.get(`/notes/${id}`);
        return { success: true, note: res.data };
    } catch (error) {
        toast.error(error.response?.data?.message || "Failed to fetch note");
        if (error.response?.status === 429) {
        toast.error("Slow down! You're fetching notes too fast", {
            duration: 4000,
            icon: "💀",
        });
        }
        return { success: false };
    }},
    deleteNoteById: async (id) => {
    if (!window.confirm("Are you sure you want to delete this note?")) return { success: false };
    try {
        await axiosInstance.delete(`/notes/${id}`);
        toast.success("Note deleted");
        return { success: true };
    } catch (error) {
        toast.error(error.response?.data?.message || "Failed to delete note");
        if (error.response?.status === 429) {
        toast.error("Slow down! You're deleting notes too fast", {
            duration: 4000,
            icon: "💀",
        });
        }
        return { success: false };
    }},
  createNote: async ({ title, content }) => {
    set({ loading: true });
    try {
      const res = await axiosInstance.post("/notes", { title, content });
      set({ notes: [res.data, ...get().notes] });
      toast.success("Note created successfully!");
      return { success: true };
    } catch (error) {
      if (error.response?.status === 429) {
        toast.error("Slow down! You're creating notes too fast", {
          duration: 4000,
          icon: "💀",
        });
      } else {
        toast.error("Failed to create note");
      }
      return { success: false };
    } finally {
      set({ loading: false });
    }
  },
}));

export default useNotesStore;