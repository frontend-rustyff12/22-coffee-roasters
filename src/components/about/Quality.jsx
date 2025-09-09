export default function Quality() {
  return (
    <section className="quality">
      <img
        className="quality-image"
        srcSet="/about/mobile/image-quality.jpg 558w,
				/about/tablet/image-quality.jpg 573w,
				/about/desktop/image-quality.jpg 445w "
        sizes="(max-width: 768px) 100%,
					 (max-width: 1440px) 100%"
        src="/about/mobile/image-quality.jpg"
        alt="Image of our finest coffee"
      />

      <div className="quality-text-container">
        <div className="quality-text">
          <h3>Uncompromising quality</h3>
          <p>
            Although we work with growers who pay close attention to all stages
            of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast consistent, user-friendly coffee, so that
            brewing is easy and enjoyable.
          </p>
        </div>
      </div>
    </section>
  );
}
