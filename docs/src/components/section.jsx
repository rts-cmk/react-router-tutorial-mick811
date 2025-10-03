export default function Section({ title, children, id }) {
    return (
        <section
            id={id}
            className="section mb-8"
            aria-labelledby={id ? `${id}-heading` : undefined}
        >
            {title && (
                <h2 className="section-heading"
                    id={id ? `${id}-heading` : undefined}
                >
                    {title}
                </h2>
            )}
            {children}
        </section>
    );
}