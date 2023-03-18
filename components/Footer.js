const Footer = () => {
  const handleRegister = ({ setShowRegister, showRegister }) => {
    if (!showRegister) {
      setShowRegister(true);
      document.body.style.overflow = "hidden";
    } else {
      setIsShow(false);
      document.body.style.overflow = "auto";
    }
  };
  return <div>Enter</div>;
};

export default Footer;
