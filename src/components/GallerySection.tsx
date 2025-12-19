import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import facilityImg from "@/assets/gallery-facility.jpg";
import trainingImg from "@/assets/gallery-training.jpg";
import equipmentImg from "@/assets/gallery-equipment.jpg";
import ringImg from "@/assets/gallery-ring.jpg";
import bagsImg from "@/assets/gallery-bags.jpg";
import sparringImg from "@/assets/gallery-sparring.jpg";

const galleryImages = [
  { src: facilityImg, alt: "Gym Facility", category: "Facilities" },
  { src: trainingImg, alt: "Training Session", category: "Training" },
  { src: equipmentImg, alt: "Boxing Equipment", category: "Equipment" },
  { src: ringImg, alt: "Boxing Ring", category: "Facilities" },
  { src: bagsImg, alt: "Heavy Bags", category: "Equipment" },
  { src: sparringImg, alt: "Sparring Session", category: "Training" },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
            THE GYM
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Step inside Old School Boxing Gym — where champions are forged and legends train.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-primary font-heading text-xl font-bold">{image.alt}</p>
                  <span className="text-muted-foreground text-sm">{image.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors z-10"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>

          <button
            className="absolute left-4 md:left-8 text-foreground hover:text-primary transition-colors z-10 p-2"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
          >
            <ChevronLeft size={48} />
          </button>

          <button
            className="absolute right-4 md:right-8 text-foreground hover:text-primary transition-colors z-10 p-2"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
          >
            <ChevronRight size={48} />
          </button>

          <div
            className="max-w-5xl max-h-[80vh] px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-[75vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <p className="text-primary font-heading text-2xl font-bold">
                {galleryImages[selectedImage].alt}
              </p>
              <span className="text-muted-foreground">
                {selectedImage + 1} / {galleryImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
