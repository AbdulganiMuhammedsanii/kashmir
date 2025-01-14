import React from "react";
import { Box, Typography, useTheme, Divider } from "@mui/material";
import Image from "next/image";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projectsData } from "./projectsData"; // or wherever you store your data

const containerVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const ProjectsTimeline: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{ display: "flex", flexDirection: "column", alignItems: "center", py: 8 }}
    >
      {/* Title (optional) */}
      <Typography variant="h3" color="secondary" sx={{ mb: 4, textAlign: "center" }}>
        Our Projects Timeline
      </Typography>

      {projectsData && projectsData.map((project, index) => (
        <TimelineCard key={project.title} project={project} index={index} />
      ))}
    </Box>
  );
};

export default ProjectsTimeline;

/**
 * Individual Project “Card” or “Section” that pops outward as it comes into view.
 */
interface TimelineCardProps {
  project: {
    date: string;
    title: string;
    image: string;
    highlights: string[];
  };
  index: number;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ project, index }) => {
  const theme = useTheme();
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const isOdd = index % 2 !== 0;

  return (
    <Box
      ref={ref}
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        maxWidth: "800px",
        mb: 8,
        // optional styling
      }}
    >
      {/* Vertical line or “connector” */}
      <Divider
        orientation="vertical"
        flexItem
        sx={{
          position: "absolute",
          left: "50%",
          top: 0,
          bottom: 0,
          transform: "translateX(-50%)",
          borderRightWidth: 2,
          borderColor: theme.palette.secondary.main,
          opacity: 0.3,
          zIndex: 0,
          display: { xs: 'none', sm: 'block' }, // Hide on extra small screens
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        style={{
          width: "100%",
          background: theme.palette.grey[100],
          borderRadius: "8px",
          overflow: "hidden",
          position: "relative",
          zIndex: 1,
          // any other styling you want specifically on the motion.div
        }}
      >
        {/* Wrap your flex container in an MUI Box */}
        <Box
          sx={{
            // MUI's breakpoint approach for responsive layout:
            display: "flex",
            flexDirection: {
              xs: "column",            // Below 600px wide
              sm: isOdd ? "row-reverse" : "row", // 600px and above
            },
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* Image */}
          <Box
            sx={{
              flex: "1 1 300px",
              textAlign: "center",
              p: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "grey.100",
            }}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={430}
              height={310}
              style={{ objectFit: "cover", borderRadius: 8 }}
            />
          </Box>

          {/* Content */}
          <Box sx={{ flex: 2, p: 3 }}>
            <Typography variant="h6" color="primary" gutterBottom>
              {project.date}
            </Typography>
            <Typography variant="h5" color="secondary" gutterBottom>
              {project.title}
            </Typography>
            {project.highlights.map((point, i) => (
              <Typography
                key={i}
                variant="body2"
                sx={{ mb: 1, color: "text.secondary" }}
              >
                • {point}
              </Typography>
            ))}
          </Box>
        </Box>
      </motion.div>

    </Box>
  );
};
