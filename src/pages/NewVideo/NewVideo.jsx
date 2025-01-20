import Btn from "@/components/Btn/Btn";
import { useVideosContext } from "@/Contexts/VideosContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./newVideo.css";

const NewVideo = () => {
  const { addVideo, loading } = useVideosContext();
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    img: "",
    link: "",
    description: "",
  });
  const navigate = useNavigate();

  const handleReset = () => {
    setFormData({
      title: "",
      category: "",
      img: "",
      link: "",
      description: "",
    });
  };

  const handleSubmit = async (e) => {
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
    const success = await addVideo(formData);
    if (success) {
      handleReset();
      navigate("/");
    }
  };

  if (loading) {
    return <h2>Carregando...</h2>;
  }

  return (
    <form className="new-video" onSubmit={handleSubmit}>
      <h2>NOVO VÍDEO</h2>
      <label htmlFor="title">Título</label>
      <input
        type="text"
        id="title"
        placeholder="Título do Vídeo"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        required
      />
      <label htmlFor="category">Categoria</label>
      <input
        type="text"
        id="category"
        placeholder="Categoria"
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        required
      />
      <label htmlFor="image">Imagem</label>
      <input
        type="text"
        id="image"
        placeholder="Link da Imagem do Vídeo"
        value={formData.img}
        onChange={(e) => setFormData({ ...formData, img: e.target.value })}
        required
      />
      <label htmlFor="video">Vídeo</label>
      <input
        type="text"
        id="video"
        placeholder="Link do Vídeo"
        value={formData.link}
        onChange={(e) => setFormData({ ...formData, link: e.target.value })}
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
        <Btn location="form" highlight handleClick={handleSubmit} type="submit">
          ADICIONAR
        </Btn>
        <Btn location="form" handleClick={handleReset}>
          LIMPAR
        </Btn>
      </nav>
    </form>
  );
};

export default NewVideo;
