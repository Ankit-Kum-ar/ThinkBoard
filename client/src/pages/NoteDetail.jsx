import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { ArrowLeftIcon, LoaderIcon, Trash2Icon } from "lucide-react";
import useNotesStore from "../store/useNotesStore";
import toast from "react-hot-toast";

const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const fetchNote = useNotesStore((state) => state.fetchNote);
  const updateNote = useNotesStore((state) => state.updateNote);
  const deleteNoteById = useNotesStore((state) => state.deleteNoteById);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getNote = async () => {
      setLoading(true);
      const result = await fetchNote(id);
      if (result.success) {
        setNote(result.note);
      }
      setLoading(false);
    };
    getNote();
  }, [id, fetchNote]);

  const handleDelete = async () => {
    const result = await deleteNoteById(id);
    if (result.success) {
      navigate("/");
    }
  };

  const handleSave = async () => {
    if (!note || !note.title || !note.content) {
      toast.error("Please add a title or content");
      return;
    }
    if (!note.title.trim() || !note.content.trim()) {
      toast.error("Please add a title or content");
      return;
    }
    setSaving(true);
    const result = await updateNote(id, note);
    setSaving(false);
    if (result.success) {
      navigate("/");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="btn btn-ghost">
              <ArrowLeftIcon className="h-5 w-5" />
              Back to Notes
            </Link>
            <button onClick={handleDelete} className="btn btn-error btn-outline">
              <Trash2Icon className="h-5 w-5" />
              Delete Note
            </button>
          </div>

          <div className="card bg-base-100">
            <div className="card-body">
              <div className="form-control mb-4 flex flex-col gap-2 w-full">
                <label className="label">
                  <span className="label-text font-bold">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Note title"
                  className="input input-bordered w-full"
                  value={note?.title || ""}
                  onChange={(e) => setNote({ ...note, title: e.target.value })}
                />
              </div>

              <div className="form-control mb-4 flex flex-col gap-2 w-full">
                <label className="label">
                  <span className="label-text font-bold">Content</span>
                </label>
                <textarea
                  placeholder="Write your note here..."
                  className="textarea textarea-bordered w-full h-48"
                  value={note?.content || ""}
                  onChange={(e) => setNote({ ...note, content: e.target.value })}
                />
              </div>

              <div className="card-actions justify-end">
                <button className="btn btn-primary" disabled={saving} onClick={handleSave}>
                  {saving ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NoteDetailPage;