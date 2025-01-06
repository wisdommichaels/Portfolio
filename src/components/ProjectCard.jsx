/**
 * @copyright 2025 Wisdom michael (c)
 * @license Apache-2.0
 */


const ProjectCard = ({
    imgSrc,
    title,
    tags,
    projectLink,
    classes
}) => {
  return (
    <div className=""
    >
        <figure className="">
            <img
                src={imgSrc}
                alt={title}
                loading="lazy"           
                className="img-cover"
            />
        </figure>

        <div className="">

            <div>
            <h3 className="title-1">
                {title}
            </h3>

            <div className="">
                {tags.map((label, key) => (
                    <span
                        key={index}
                        className=""
                    >
                        {label}
                    </span>
                ))}
            </div>
            </div>

            <div className="">
                <span className=""
                aria-hidden>
                </span>
            </div>
        </div>
    </div>
  )
}

ProjectCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    projectLink: PropTypes.string.isRequired,
    classes: PropTypes.string
}

export default ProjectCard