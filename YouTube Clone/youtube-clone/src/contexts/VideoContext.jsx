import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { API_KEY, REGION, MAX_RESULTS_HOME, MAX_RESULTS_SUGGESTIONS, YOUTUBE_VIDEOS_URL, YOUTUBE_SEARCH_URL } from "../utils/videoApi";

const VideoContext = createContext();

export function VideoProvider({ children }) {
  const [videos, setVideos] = useState([]);
  const [current, setCurrent] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPopular = async () => {
    setLoading(true);
    try {
      const res = await axios.get(YOUTUBE_VIDEOS_URL, {
        params: { part: "snippet,statistics,contentDetails", chart: "mostPopular", maxResults: MAX_RESULTS_HOME, regionCode: REGION, key: "AIzaSyCmsb_mGBK3iPIP_heleGUybwnQppMe68Q" },
      });
      setVideos(res.data.items);
    } catch (err) {
      console.error(err.response?.data || err);
    } finally {
      setLoading(false);
    }
  };

  const fetchVideoById = async (id) => {
    setLoading(true);
    try {
      const res = await axios.get(YOUTUBE_VIDEOS_URL, {
        params: { part: "snippet,statistics,contentDetails", id, key: "AIzaSyCmsb_mGBK3iPIP_heleGUybwnQppMe68Q" },
      });
      const item = res.data.items[0];
      setCurrent(item);
      await fetchSuggestions(item.snippet.title);
    } catch (err) {
      console.error(err.response?.data || err);
    } finally {
      setLoading(false);
    }
  };

  const fetchSuggestions = async (q) => {
    try {
      const res = await axios.get(YOUTUBE_SEARCH_URL, {
        params: { part: "snippet", q, maxResults: MAX_RESULTS_SUGGESTIONS, type: "video", key: "AIzaSyCmsb_mGBK3iPIP_heleGUybwnQppMe68Q" },
      });
      setSuggestions(res.data.items);
    } catch (err) {
      console.error(err.response?.data || err);
    }
  };

  useEffect(() => {
    fetchPopular();
  }, []);

  return (
    <VideoContext.Provider value={{ videos, current, suggestions, fetchVideoById, loading }}>
      {children}
    </VideoContext.Provider>
  );
}

export const useVideos = () => useContext(VideoContext);
