import React from "react";
import { Link } from "react-router-dom";
import { useVideos } from "../contexts/VideoContext";

function VideoCard({ item }) {
  const snippet = item.snippet;
  const stats = item.statistics || {};
  const videoId = item.id?.videoId || item.id;
  const thumb = snippet.thumbnails?.medium?.url || snippet.thumbnails?.default?.url;
  const publishedAt = new Date(snippet.publishedAt).toLocaleDateString();
  return (
    <Link to={`/watch/${videoId}`} className="block group">
      <div className="w-full">
        <img src={thumb} alt={snippet.title} className="w-full h-44 object-cover rounded" />
      </div>
      <div className="mt-2">
        <h3 className="text-sm font-medium line-clamp-2">{snippet.title}</h3>
        <div className="text-xs text-gray-500">{publishedAt} • {stats.viewCount || "—"} views</div>
      </div>
    </Link>
  );
}

export default function Home(){
  const { videos, loading } = useVideos();

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Home</h2>
      {loading && <div>Loading videos...</div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((v) => <VideoCard key={v.id} item={v} />)}
      </div>
    </div>
  );
}
