import { TestimonialsStyles, TestimonialsTitle, TestimonialsGrid, TestimonialCard, Avatar, Quote, Author, Role } from "./styles";

const Testimonials = (): JSX.Element => {
    return (
        <TestimonialsStyles tabIndex={0}>
            <TestimonialsTitle>Testimonios</TestimonialsTitle>
            <TestimonialsGrid>
                <TestimonialCard tabIndex={0}>
                    <Avatar src="/img/avatar-1-opt.jpg" alt="Imagen de Carlos Ruiz" width={64} height={64} loading="lazy" />
                    <Quote>La revista me inspira cada día con historias que importan.</Quote>
                    <Author>Carlos Ruiz</Author>
                    <Role>Editor de moda</Role>
                </TestimonialCard>

                <TestimonialCard tabIndex={0}>
                    <Avatar src="/img/avatar-2-opt.jpg" alt="Imagen de Maria Gonzalez" width={64} height={64} loading="lazy" />
                    <Quote>Contenido profundo y visualmente impecable, siempre relevante.</Quote>
                    <Author>Maria Gonzalez</Author>
                    <Role>Fotógrafa</Role>
                </TestimonialCard>

                <TestimonialCard tabIndex={0}>
                    <Avatar src="/img/avatar-3-opt.jpg" alt="Imagen de Lucía Gómez" width={64} height={64} loading="lazy" />
                    <Quote>Una mezcla perfecta entre estilo y contenido de calidad.</Quote>
                    <Author>Lucía Gómez</Author>
                    <Role>Productora</Role>
                </TestimonialCard>
            </TestimonialsGrid>
        </TestimonialsStyles>
    )
}

export default Testimonials;

