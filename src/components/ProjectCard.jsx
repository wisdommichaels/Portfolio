/**
 * @copyright 2025 Wisdom michael (c)
 * @license Apache-2.0
 */
import PropTypes from "prop-types"


const ProjectCard = ({
    imgSrc,
    title,
    tools,
    projectLink,
    classes
}) => {
  return (
    <div className={"relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/70 active:bg-zinc-700/60 ring-inset ring-zinc-50/5 transition-colors " +  classes}
    >
        <figure className="img-box aspect-square rounded-lg mb-4">
            <img
            src={imgSrc}
            width={800}
            height={800}
            alt={title}
            loading="lazy"           
            className="img-cover"
            />
        </figure>

        <div className="flex justify-between items-center gap-4">

            <div>
            <h3 className="title-1 mb-3">
                {title}
            </h3>

            <div className="flex flex-wrap items-center gap-2">
                {tools.map((label, key) => (
                    <span
                        key={key}
                        className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"
                    >
                        {label}
                    </span>
                ))}
            </div>
            </div>

            <div className="w-11 h-11 rounded-lg bg-purple-500 hover:bg-purple-400 grid  place-items-center shrink-0">
                <span 
                className=" material-symbols-rounded"
                aria-hidden="true"
                >
                    arrow_outward
                </span>
            </div>
        </div>

        <a 
        href={projectLink}
        target="_blank"
        className={`absolute inset-0`}
        ></a>
    </div>
  )
}

ProjectCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tools: PropTypes.array.isRequired,
    projectLink: PropTypes.string,
    classes: PropTypes.string
}

export default ProjectCard

