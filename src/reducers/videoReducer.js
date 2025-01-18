import {addVideoService, deleteVideoService, updateVideoService} from '../services/api';
import { v4 as uuidv4 } from 'uuid';

export const ADD_VIDEO = "ADD_VIDEO";
export const REMOVE_VIDEO = "REMOVE_VIDEO";
export const UPDATE_VIDEO = "UPDATE_VIDEO";

const videoReducer = async (state, action) => {
  switch (action.type) {
    case ADD_VIDEO:
      const newVideo = action.payload;
      newVideo.id = uuidv4();
      const exist = state.findIndex((item) => item.link === newVideo.link);
      if (exist === -1) {
        const response = await addVideoService(newVideo)
        return [...state, response];
      } else {
        alert('Este vídeo já foi adicionado')
        return state
      }
    case REMOVE_VIDEO:
      const videoId = action.payload;
      await deleteVideoService(videoId);
      return state.filter((item) => item.id !== videoId);

    case UPDATE_VIDEO:
      const { videoId: id, updatedVideo } = action.payload;
      const updatedProps = await updateVideoService(videoId, updatedVideo);
      return state.map((item) =>
        item.id === id ? {...videoId, updatedProps} : item
      );

    default:
      return state;
  }
};

export default videoReducer;