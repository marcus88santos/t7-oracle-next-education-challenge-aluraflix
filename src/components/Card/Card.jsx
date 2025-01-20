import Btn from "../Btn/Btn";
import { TbTrashX } from "react-icons/tb";
import { BiEditAlt } from "react-icons/bi";
import './card.css'
import { useVideosContext } from "@/contexts/VideosContext";

const Card = ({video, color }) => {
  const {deleteVideo, setVideoEdit, setLoading} = useVideosContext()
  const handleDelete = (e) => {
    e.preventDefault();
    deleteVideo(video.id)
  }
  const handleEdit = (e) => {
    e.preventDefault();
    setVideoEdit(video)
  }
  return (
    <li className="card" id={video.id}>
      <img src={video.img} alt={video.title} style={{borderColor: color, boxShadow: `inset 0 0 17px 8px ${color}`}}/>
      <div className="card-btns" style={{borderColor: color}}>
        <Btn handleClick={handleDelete} icon={<TbTrashX />} location='card'>DELETAR</Btn>
        <Btn handleClick={handleEdit} icon={<BiEditAlt/>} location='card'>EDITAR</Btn>
      </div>
    </li>
  )}
export default Card;
