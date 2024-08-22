function importAll(r) {
  let images = [];
  r.keys().forEach((item, index) => {
    images.push({ src: r(item) });
  });
  return images;
}

const galleryImages = importAll(
  require.context("../assets/gallery", false, /\.(png|jpe?g|svg)$/)
);
export default galleryImages;
