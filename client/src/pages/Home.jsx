import { useEffect } from "react";
import useNotesStore from "../store/useNotesStore";
import { NoteCard, NotesNotFound, RateLimited } from "../components";
import { Loader2 } from "lucide-react";

const Home = () => {
    const { notes, loading, isRateLimited, fetchNotes, setNotes } = useNotesStore();

    useEffect(() => {
        fetchNotes();
    }, [fetchNotes]);

    return (
        <div className="min-h-screen">
            {/* <Navbar /> */}

            {isRateLimited && <RateLimited />}

            <div className="max-w-7xl mx-auto p-4 mt-6">
                {loading && <div className="text-center flex justify-center items-center text-primary py-10">
                    <Loader2 className="animate-spin size-10" />
                </div>}

                {notes.length === 0 && !isRateLimited && <NotesNotFound />}

                {notes.length > 0 && !isRateLimited && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {notes.map((note) => (
                    <NoteCard key={note._id} note={note} setNotes={setNotes} />
                    ))}
                </div>
                )}
            </div>
        </div>
    )
}

export default Home