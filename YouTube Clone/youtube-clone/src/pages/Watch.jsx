import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useVideos } from "../contexts/VideoContext";

export default function Watch() {
  const { videoId } = useParams();
  const { current, fetchVideoById, suggestions } = useVideos();
  const navigate = useNavigate();

  // Fetch video on route change
  useEffect(() => {
    if (videoId) {
      fetchVideoById(videoId);
      window.scrollTo(0, 0); // scroll to top when new video loads
    }
  }, [videoId, fetchVideoById]);

  const handleSuggestionClick = (s) => {
    const newId = s.id?.videoId || s.id; // search results have id.videoId, videos endpoint have id
    if (!newId) return;
    navigate(`/watch/${newId}`);
  };

  if (!current) return <div className="text-center mt-10">Loading video...</div>;

  const { snippet, statistics } = current;
  const videoToPlay = current.id?.videoId || current.id;
  const published = new Date(snippet?.publishedAt).toLocaleString();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4">
      {/* Main video area */}
      <div className="lg:col-span-2">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            title={snippet?.title}
            src={`https://www.youtube.com/embed/${videoToPlay}`}
            allowFullScreen
            className="w-full h-96 rounded"
          />
        </div>

        <h1 className="text-xl font-semibold mt-4">{snippet?.title}</h1>
        <div className="text-sm text-gray-600 mt-1">
          {statistics?.viewCount || 0} views • {published}
        </div>
        <div className="mt-4 text-gray-800 whitespace-pre-wrap">{snippet?.description}</div>
      </div>

      {/* Suggestions sidebar */}
      <aside>
        <h3 className="font-semibold mb-3">Up next</h3>
        <div className="space-y-3">
          {suggestions?.map((s) => {
            const id = s.id?.videoId || s.id;
            const thumb = s.snippet?.thumbnails?.default?.url;
            return (
              <div
                key={id}
                className="flex gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded"
                onClick={() => handleSuggestionClick(s)}
              >
                {thumb && (
                  <img
                    src={thumb}
                    alt={s.snippet?.title}
                    className="w-28 h-16 object-cover rounded"
                  />
                )}
                <div className="flex-1">
                  <div className="text-sm font-medium line-clamp-2">{s.snippet?.title}</div>
                  <div className="text-xs text-gray-500">{s.snippet?.channelTitle}</div>
                </div>
              </div>
            );
          })}
        </div>
      </aside>
    </div>
  );
}
