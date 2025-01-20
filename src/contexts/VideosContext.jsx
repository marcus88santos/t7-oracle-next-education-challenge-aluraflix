import {
  addVideoService,
  deleteVideoService,
  getVideosService,
  updateVideoService,
} from "@/services/api";
import { createContext, useContext, useEffect, useState } from "react";

const VideosContext = createContext();
// let categories = {}

export const useVideosContext = () => {
  return useContext(VideosContext);
};

export const VideosProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [videoEdit, setVideoEdit] = useState(null);

  useEffect(() => {
    async function fetch() {
      try {
        const videosData = await getVideosService();
        setVideos(videosData);
      } catch (error) {
        console.error("Erro ao buscar vídeos:", error);
      }
    }
    fetch();
    setLoading(false);
  }, []);

  const addVideo = async (video) => {
    try {
      const exists = videos.findIndex((item) => item.link === video.link);
      if (exists === -1) {
        const addedVideo = await addVideoService(video);
        setVideos([...videos, addedVideo]);
        return true;
      } else {
        alert("Vídeo já cadastrado");
        return false;
      }
    } catch (error) {
      console.error("Erro ao adicionar vídeo:", error);
    }
  };

  const deleteVideo = async (videoId) => {
    try {
      await deleteVideoService(videoId);
      setVideos(videos.filter((video) => video.id !== videoId));
    } catch (error) {
      console.error("Erro ao remover vídeo:", error);
    }
  };

  const updateVideo = async (videoId, updatedVideo) => {
    try {
      const updatedProps = await updateVideoService(videoId, updatedVideo);
      setVideos(
        videos.map((video) => {
          if (video.id === videoId) {
            return { ...video, ...updatedProps };
          }
          return video;
        })
      );
      setVideoEdit(null);
      return true;
    } catch (error) {
      console.error("Erro ao atualizar vídeo:", error);
    }
  };

  return (
    <VideosContext.Provider
      value={{
        videos,
        setVideos,
        videoEdit,
        setVideoEdit,
        addVideo,
        deleteVideo,
        updateVideo,
        loading,
        setLoading,
      }}
    >
      {children}
    </VideosContext.Provider>
  );
};
