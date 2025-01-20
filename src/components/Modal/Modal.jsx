import { useVideosContext } from "@/contexts/VideosContext";
import { useEffect, useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Btn from "../Btn/Btn";
import "./modal.css";

const Modal = () => {
  const { updateVideo, videoEdit, setVideoEdit, loading, setLoading } =
    useVideosContext();
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setLoading(true);
    if (videoEdit) {
      setFormData({
        title: videoEdit.title,
        category: videoEdit.category,
        img: videoEdit.img,
        link: videoEdit.link,
        description: videoEdit.description,
      });
    }
    setLoading(false);
  }, [videoEdit]);

  const handleReset = () => {
    setFormData({
      title: "",
      category: "",
      img: "",
      link: "",
      description: "",
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (
      !formData.title ||
      !formData.category ||
      !formData.img ||
      !formData.link ||
      !formData.description
    ) {
      alert("Preencha todos os campos");
      return;
    }
    const success = await updateVideo(videoEdit.id, formData);
    if (success) {
      handleClose();
    }
  };

  const handleClose = () => {
    document.querySelector(".modal").setAttribute("open", false);
    setVideoEdit(null);
  };

  if (loading) {
    return <h2>Carregando...</h2>;
  }

  return (
    videoEdit && (
      <>
        <div className="modal-container"></div>
        <dialog open={!!videoEdit} className="modal">
          <IoMdCloseCircleOutline onClick={handleClose} />
          <form className="modal-form">
            <h2>EDITAR VÍDEO</h2>
            <label htmlFor="title">Título</label>
            <input
              type="text"
              id="title"
              placeholder="Título do Vídeo"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              required
            />
            <label htmlFor="category">Categoria</label>
            <input
              type="text"
              id="category"
              placeholder="Categoria"
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              required
            />
            <label htmlFor="image">Imagem</label>
            <input
              type="text"
              id="image"
              placeholder="Link da Imagem do Vídeo"
              value={formData.img}
              onChange={(e) =>
                setFormData({ ...formData, img: e.target.value })
              }
              required
            />
            <label htmlFor="video">Vídeo</label>
            <input
              type="text"
              id="video"
              placeholder="Link do Vídeo"
              value={formData.link}
              onChange={(e) =>
                setFormData({ ...formData, link: e.target.value })
              }
              required
            />
            <label htmlFor="description">Descrição</label>
            <textarea
              type="text"
              id="description"
              placeholder="Descrição do Vídeo"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              required
            />
            <nav>
              <Btn
                location="modal"
                highlight
                handleClick={handleUpdate}
                type="submit"
              >
                SALVAR
              </Btn>
              <Btn location="modal" handleClick={handleReset}>
                LIMPAR
              </Btn>
            </nav>
          </form>
        </dialog>
      </>
    )
  );
};

export default Modal;
