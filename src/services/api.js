import axios from 'axios';

const api = axios.create({
  baseURL: 'https://678bde6c1a6b89b27a2bb4b5.mockapi.io/videos',
});

const getVideosService = async () => {
  try {
    const response = await api.get('/');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar os vídeos', error);
    throw error;
  }
}

const addVideoService = async (newVideo) => {
  try {
    const response = await api.post("/", newVideo);
    return response.data;
  } catch (error) {
    console.log('Erro ao adicionar o vídeo', error);
    throw error;
  }
}

const deleteVideoService = async (videoLink) => {
  try {
    const response = await api.delete(`/${videoLink}`);
    return response.data;
  } catch (error) {
    console.log('Erro ao deletar o vídeo', error);
    throw error;
  }
}

const updateVideoService = async (videoId, updatedVideo) => {
  try {
    const response = await api.put(`/${videoId}`, updatedVideo);
    return response.data;
  } catch (error) {
    console.log('Erro ao atualizar o vídeo', error);
    throw error;
  }
}