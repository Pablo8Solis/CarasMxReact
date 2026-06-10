import { TestimonialsStyles, TestimonialsTitle, TestimonialsGrid, TestimonialCard, Avatar, Quote, Author, Role } from "./styles";

const Testimonials = (): JSX.Element => {
    return (
        <TestimonialsStyles>
            <TestimonialsTitle>Testimonios</TestimonialsTitle>
            <TestimonialsGrid>
                <TestimonialCard>
                    <Avatar src="/img/avatar-1.jpg" alt="avatar 1" />
                    <Quote>La revista me inspira cada día con historias que importan.</Quote>
                    <Author>Carlos Ruiz</Author>
                    <Role>Editor de moda</Role>
                </TestimonialCard>

                <TestimonialCard>
                    <Avatar src="/img/avatar-2.jpg" alt="avatar 2" />
                    <Quote>Contenido profundo y visualmente impecable, siempre relevante.</Quote>
                    <Author>Maria Gonzalez</Author>
                    <Role>Fotógrafa</Role>
                </TestimonialCard>

                <TestimonialCard>
                    <Avatar src="/img/avatar-3.jpg" alt="avatar 3" />
                    <Quote>Una mezcla perfecta entre estilo y contenido de calidad.</Quote>
                    <Author>Lucía Gómez</Author>
                    <Role>Productora</Role>
                </TestimonialCard>
            </TestimonialsGrid>
        </TestimonialsStyles>
    )
}

export default Testimonials;
