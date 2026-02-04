export type Project = {
  id: number;
  slug: string;
  title: string;
  featured: boolean;

  image: string;
  tech: string[];

  shortDescription: string;
  longDescription: string;

  highlights: string[];
  responsibilities: string[];
  results: string[];

  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  // =========================
  // FEATURED (Top 3)
  // =========================

  {
    id: 1,
    slug: "automation-simulation-fanuc-abb-workcell-validation",
    title: "Automation Simulation with Fanuc & ABB Robots (Workcell Validation)",
    featured: true,
    image: "/Images/ABB.png",
    tech: ["ABB RobotStudio", "FANUC ROBOGUIDE", "Workcell Simulation", "I/O", "Safety", "Cycle Time"],
    shortDescription:
      "Programmed and validated ABB + FANUC workcells with repeatable paths, tuned motion parameters for stability, and verified safety signals through repeated simulation runs.",
    longDescription:
      "Developed and validated robotic workcells using ABB RobotStudio and FANUC ROBOGUIDE. Built repeatable path motions and optimized cycle stability by tuning speeds, zones, approach angles, and part orientation. Verified safety signals and interlocks and evaluated robustness through repeated simulation runs, similar to industrial process validation.",
    highlights: [
      "Repeatable workcell programming and simulation-based validation",
      "Motion tuning for cycle stability: speeds, zones, approach angles, orientation",
      "Safety verification with interlocks and robustness testing via repeated runs",
    ],
    responsibilities: [
      "Programmed ABB and FANUC robot paths for automation tasks and validated repeatability",
      "Optimized motion plans by tuning speeds, blending/zones, approach angles, and orientations",
      "Verified safety signals/interlocks and stress-tested robustness via repeated simulation cycles",
    ],
    results: [
      "Improved cycle stability and reduced process variation through systematic parameter tuning",
      "Confirmed reliable behavior through repeated simulation runs with safety checks enabled",
    ],
    githubUrl: "",
    liveUrl: "",
  },

  {
    id: 2,
    slug: "autonomous-warehouse-navigation-ros2",
    title: "Autonomous Warehouse Navigation with ROS2 & LiDAR",
    featured: true,
    image: "/Images/Autonomous Warehouse Navigation.jpg",
    tech: ["ROS2", "Nav2", "Gazebo", "RViz", "SLAM", "GMapping", "AMCL", "LiDAR"],
    shortDescription:
      "Built and simulated an AMR navigation stack in ROS2 with SLAM, localization, and adaptive navigation using LiDAR and camera sensing.",
    longDescription:
      "Developed an end-to-end AMR navigation pipeline in ROS2, integrating mapping, localization, and planning modules in a Gazebo simulation environment. Focused on robust integration across TF frames, sensor pipelines, and repeatable validation runs to ensure navigation behavior is consistent and debuggable.",
    highlights: [
      "ROS2 navigation pipeline with mapping + localization + planning integration",
      "Sensor integration with LiDAR and RGB camera inputs for SLAM and navigation",
      "Designed for repeatable testing and debugging through controlled simulation runs",
    ],
    responsibilities: [
      "Integrated mapping and localization modules (SLAM + localization) and validated frame/TF consistency",
      "Implemented sensor data filtering and navigation tuning for stable motion behavior",
      "Created repeatable scenarios and test runs for debugging and evaluation",
    ],
    results: [
      "Achieved stable navigation behavior with consistent localization and goal-reaching performance in simulation",
      "Improved reliability by tuning planning and filtering parameters for challenging layouts",
    ],
    githubUrl: "",
    liveUrl: "",
  },

  {
    id: 3,
    slug: "ros2-cpp-lidar-perception-pipeline",
    title: "ROS2 C++ LiDAR Perception Pipeline (PointCloud2 Filtering & Segmentation)",
    featured: true,
    image: "/Images/LiDAR PointCloud.png",
    tech: ["ROS2", "C++", "PointCloud2", "PCL", "RViz", "rosbag", "TF"],
    shortDescription:
      "Built a ROS2 C++ perception node that consumes PointCloud2 and publishes filtered/segmented outputs with reproducible rosbag-based validation.",
    longDescription:
      "Implemented a ROS2 C++ node for LiDAR perception that ingests sensor_msgs/PointCloud2 and outputs filtered and segmented point clouds suitable for downstream autonomy modules. Emphasized integration readiness by defining topic contracts, TF assumptions, runtime parameters, and robust debug workflows using rosbag playback and controlled test cases.",
    highlights: [
      "Parameterized filtering and segmentation stages for repeatable perception behavior",
      "Integration-ready interfaces: topic contracts, TF assumptions, runtime params",
      "Reproducible debugging with rosbag playback + structured logs",
    ],
    responsibilities: [
      "Implemented ROS2 node architecture with subscription/publishing and parameter validation",
      "Validated behavior using rosbag playback and quantitative checks across scenarios",
      "Improved code quality with structured logging and regression-style test scripts",
    ],
    results: [
      "Improved debugging speed via reproducible rosbag-based workflows",
      "Reduced regressions by adding parameter checks and consistent validation routines",
    ],
    githubUrl: "",
    liveUrl: "",
  },

  // =========================
  // OTHER PROJECTS (10)
  // =========================

  {
    id: 4,
    slug: "driver-incapacitation-safe-stop-longitudinal-control",
    title: "Automated Driver Incapacitation Safe-Stop — Longitudinal Control (MATLAB/Simulink)",
    featured: false,
    image: "/Images/Driver.png",
    tech: ["MATLAB", "Simulink", "Control Systems", "PI Control", "Validation"],
    shortDescription:
      "Designed a four-state longitudinal control system in MATLAB/Simulink to execute a safe-stop maneuver under safety and comfort constraints.",
    longDescription:
      "Designed a four-state longitudinal control system in MATLAB/Simulink to execute a safe-stop maneuver under safety and comfort constraints. Tuned PI control parameters through iterative simulation trials to meet constraints, documented results and trade-offs, and validated closed-loop performance using repeatable test cases.",
    highlights: [
      "Four-state longitudinal control architecture for safe-stop execution",
      "Iterative PI tuning with documented trade-offs and constraints",
      "Repeatable validation using structured test cases",
    ],
    responsibilities: [
      "Designed a four-state control architecture for safe-stop maneuver execution",
      "Tuned PI parameters through iterative simulation trials to meet constraints",
      "Validated closed-loop performance using repeatable test cases and documented results",
    ],
    results: [
      "Demonstrated safe-stop behavior under constraints with repeatable simulation validation",
      "Produced documented tuning results and trade-offs suitable for engineering review",
    ],
    githubUrl: "",
    liveUrl: "",
  },

  {
    id: 5,
    slug: "robot-barista-ur5-ai-automation",
    title: "Robot Barista — UR5 Automation + Perception + Conversational AI",
    featured: false,
    image: "/Images/Barista.png",
    tech: ["UR5", "OpenCV", "Eye-in-Hand Calibration", "Whisper", "BERT/GPT", "Streamlit"],
    shortDescription:
      "Built a UR5-driven automation workflow with perception and conversational AI for end-to-end order handling and task execution.",
    longDescription:
      "Developed a Robot Barista system integrating UR5 automation, perception, and conversational AI. Built a multimodal interaction stack (speech-to-text, intent recognition, and text-to-speech) and improved deployment reliability through calibration and end-to-end integration with a Streamlit interface and optimized inference pipeline.",
    highlights: [
      "UR5 workflow integrating automation, perception, and NLP-based interaction",
      "Multimodal AI stack: Whisper STT + intent recognition (BERT/GPT) + TTS",
      "Eye-in-hand calibration with strong repeatability and system-level integration",
    ],
    responsibilities: [
      "Designed UR5 task flow for real-time, multi-step automation behaviors",
      "Integrated speech pipeline + intent recognition for conversational order handling",
      "Performed eye-in-hand calibration and built a UI layer for operator interaction",
    ],
    results: [
      "Achieved ±1.5 mm TCP repeatability via calibration workflow",
      "Enabled conversational order handling and demo-ready end-to-end performance",
    ],
    githubUrl: "",
    liveUrl: "",
  },

  {
    id: 6,
    slug: "mini-autonomous-navigation-stack-matlab",
    title: "Mini Autonomous Navigation Stack (MATLAB) — EKF, LiDAR, A*, DWA",
    featured: false,
    image: "/Images/Mini.jpg",
    tech: ["MATLAB", "EKF", "LiDAR", "A*", "DWA", "Replanning"],
    shortDescription:
      "Built an end-to-end navigation stack with EKF localization, LiDAR obstacle perception, A* global planning, and DWA local control.",
    longDescription:
      "Developed a complete autonomous navigation pipeline in MATLAB, combining estimation, perception, global planning, and local control. Integrated modules under uncertainty and validated system performance through checkpoint-based integration, repeatable test runs, and documented architecture/results.",
    highlights: [
      "End-to-end navigation integration: EKF + perception + planning + control",
      "Repeatable checkpoint-based integration and failure-mode debugging",
      "Documented architecture and results for final report",
    ],
    responsibilities: [
      "Implemented EKF state estimation and safe sensor update logic under uncertainty",
      "Built A* global planner and DWA local planner with replanning behavior",
      "Debugged failure cases using controlled tests and repeatable runs",
    ],
    results: [
      "Achieved consistent goal-reaching behavior in simulation with stable replanning",
      "Improved robustness by identifying and fixing integration failure modes",
    ],
    githubUrl: "",
    liveUrl: "",
  },

  {
    id: 7,
    slug: "lidar-ndt-localization-memory-efficient-mapping",
    title: "LiDAR NDT Localization and Memory-Efficient Mapping (ROS Noetic, KITTI)",
    featured: false,
    image: "/Images/LiDAR Perception.png",
    tech: ["ROS Noetic", "LiDAR", "NDT", "Voxel Filter", "KITTI", "Python"],
    shortDescription:
      "Implemented LiDAR NDT localization on KITTI and tuned voxel filtering to reduce map size ~89.5% while preserving ~10 Hz updates.",
    longDescription:
      "Implemented a LiDAR NDT localization pipeline in ROS Noetic using KITTI highway sequences. Recorded pose and map growth to support quantitative analysis, tuned NDT + voxel filter parameters to reduce memory footprint, and built Python analytics to measure trajectory length, speed, and map growth.",
    highlights: [
      "ROS Noetic NDT localization integrated on KITTI highway sequences",
      "Parameter tuning for map compression with performance preservation",
      "Python analytics for trajectory length, speed, and map growth plots",
    ],
    responsibilities: [
      "Implemented ROS pipeline for pose estimation and map recording",
      "Tuned NDT and voxel filter parameters to reduce map growth",
      "Created Python scripts for path length/speed and plotting analysis",
    ],
    results: [
      "Reduced map size by ~89.5% while preserving ~10 Hz pose update rate",
      "Generated trajectory and map growth plots for reporting",
    ],
    githubUrl: "",
    liveUrl: "",
  },

  {
    id: 8,
    slug: "lidar-object-detection-tracking-kitti",
    title: "LiDAR Object Detection and Tracking on KITTI (3D Tracks in RViz)",
    featured: false,
    image: "/Images/LiDAR Tracking.jpg",
    tech: ["ROS", "LiDAR", "KITTI", "rosbag", "RViz", "Kalman Filter", "Python"],
    shortDescription:
      "Deployed LiDAR tracking on KITTI sequences and tuned matcher/KF parameters to improve track stability while maintaining real-time performance.",
    longDescription:
      "Deployed a LiDAR object detection and tracking pipeline on KITTI sequences by converting raw data into ROS bags and visualizing 3D tracks in RViz. Built Python tooling to parse tracking outputs, summarize track statistics, and tuned matching/Kalman filtering parameters to improve stability.",
    highlights: [
      "Converted KITTI data to ROS bags and visualized 3D tracks in RViz",
      "Python tooling for track summaries: IDs, lifetimes, observations",
      "Matcher/KF tuning to improve stability while maintaining real-time performance",
    ],
    responsibilities: [
      "Deployed tracking pipeline on KITTI sequences and validated visualizations",
      "Implemented parsing tools for tracking topics and snapshot summaries",
      "Tuned tracking parameters to improve stable track counts and lifetimes",
    ],
    results: [
      "Improved mean track lifetime by up to ~9% while maintaining real-time performance",
      "Increased stable track counts in city and residential scenes",
    ],
    githubUrl: "",
    liveUrl: "",
  },

  {
    id: 9,
    slug: "real-time-pose-exercise-recognition-bilstm",
    title: "Real-Time Pose-Based Exercise Recognition with Bi-LSTM (MediaPipe)",
    featured: false,
    image: "/Images/Squat.jpg",
    tech: ["Python", "MediaPipe", "Bi-LSTM", "Deep Learning", "Feature Engineering"],
    shortDescription:
      "Built a wearable-free exercise classifier and achieved 98.12% grouped-validation accuracy with stable overlays and rep counting.",
    longDescription:
      "Developed an interpretable exercise recognition pipeline using MediaPipe pose landmarks and engineered kinematic features. Trained a two-layer Bi-LSTM on fixed windows, implemented smoothing and robustness logic for missed detections, and delivered reproducible code and artifacts.",
    highlights: [
      "Kinematic feature pipeline from MediaPipe pose landmarks",
      "Two-layer Bi-LSTM sequence classification on 60-frame windows",
      "Rep counting + stable on-frame overlays for real-time usage",
    ],
    responsibilities: [
      "Designed kinematic features and windowing strategy for temporal classification",
      "Implemented smoothing and gap-handling logic for robustness",
      "Packaged reproducible training and evaluation artifacts",
    ],
    results: [
      "Achieved 98.12% grouped-validation accuracy with strong class F1 scores",
      "Delivered stable overlays and reliable squat rep counting",
    ],
    githubUrl: "",
    liveUrl: "",
  },

  {
    id: 10,
    slug: "traffic-sign-detection-adverse-weather-yolov11",
    title: "Traffic Sign Detection Under Adverse Weather (YOLOv11)",
    featured: false,
    image: "/Images/YOLO Traffic.jpg",
    tech: ["Python", "YOLOv11", "PyTorch", "OpenCV", "NumPy", "Augmentation"],
    shortDescription:
      "Designed and trained a YOLOv11 detector for rain/snow/night and built an augmentation pipeline that improved robustness by ~32%.",
    longDescription:
      "Designed and trained a YOLOv11-based traffic sign detector across rain, snow, and night conditions. Built a data-augmentation pipeline using OpenCV and NumPy to simulate weather effects, evaluated results using mAP/precision/recall, and optimized evaluation throughput.",
    highlights: [
      "YOLOv11 detection across adverse weather conditions",
      "Custom augmentation pipeline using OpenCV/NumPy",
      "Evaluation with mAP/precision/recall and throughput optimization",
    ],
    responsibilities: [
      "Designed training pipeline and evaluation routines",
      "Implemented weather simulation augmentations and robustness testing",
      "Optimized inference/evaluation throughput for faster experimentation",
    ],
    results: [
      "Improved robustness by ~32% using augmentation-driven training",
      "Produced quantitative evaluation results and analysis",
    ],
    githubUrl: "",
    liveUrl: "",
  },

  {
    id: 11,
    slug: "federated-split-learning-ecg-classification",
    title: "Federated Split Learning for ECG Classification (Privacy-Preserving)",
    featured: false,
    image: "/Images/FedML.jpg",
    tech: ["Python", "PyTorch", "Federated Learning", "Split Learning", "Sockets", "Edge AI"],
    shortDescription:
      "Implemented privacy-preserving split federated learning with socket communication and achieved ~96% heartbeat classification accuracy.",
    longDescription:
      "Implemented a federated split learning approach for ECG classification where clients keep data locally and only share intermediate activations/updates. Built socket-based communication and PyTorch model partitioning to enable privacy-preserving distributed training across edge devices.",
    highlights: [
      "Federated split learning keeping raw ECG data on-device",
      "Socket-based training coordination and parameter exchange",
      "Strong classification accuracy with privacy-by-design architecture",
    ],
    responsibilities: [
      "Implemented split model training logic and client-server communication",
      "Built dataset preprocessing and evaluation routines",
      "Validated accuracy and stability across distributed training runs",
    ],
    results: [
      "Achieved ~96% accuracy across five heartbeat classes while maintaining data privacy",
      "Demonstrated deployable distributed-training architecture for edge settings",
    ],
    githubUrl: "",
    liveUrl: "",
  },

  {
    id: 12,
    slug: "roof-fall-prediction-fog-anomaly-detection",
    title: "Roof Fall Prediction System (Fog Computing + Anomaly Detection)",
    featured: false,
    image: "/Images/Roof.jpg",
    tech: ["Raspberry Pi", "MQTT", "IoT", "Fog Computing", "Python", "Anomaly Detection"],
    shortDescription:
      "Built a fog-enabled pipeline to stream sensor data, log to CSV, and sync to cloud storage for anomaly detection and monitoring.",
    longDescription:
      "Developed a fog-enabled monitoring architecture using edge nodes to collect sensor signals, transmit data via MQTT, record time-series logs, and sync to cloud storage for analysis. Designed the system for reliability and reproducibility across runs with clear data pipelines.",
    highlights: [
      "Edge-to-cloud data pipeline with MQTT and structured logging",
      "Fog node processing for near-real-time monitoring",
      "Designed for reproducible experiments and data analysis",
    ],
    responsibilities: [
      "Implemented data pipeline for sensor streaming, logging, and cloud sync",
      "Designed anomaly detection workflow and repeatable data capture",
      "Validated end-to-end system behavior under controlled tests",
    ],
    results: [
      "Enabled reliable data capture and monitoring for anomaly detection experiments",
      "Improved reproducibility through consistent logging and transfer workflows",
    ],
    githubUrl: "",
    liveUrl: "",
  },

  {
    id: 13,
    slug: "agrifog-iot-agriculture-monitoring",
    title: "AGRIFOG: Fog-Assisted IoT Enabled Agriculture Monitoring System",
    featured: false,
    image: "/Images/Agri.jpg",
    tech: ["ESP32", "Raspberry Pi", "MQTT", "IoT", "Fog Computing", "Google Drive API"],
    shortDescription:
      "Built a fog-assisted IoT monitoring pipeline using ESP32 sensors and Raspberry Pi edge processing with MQTT and cloud synchronization.",
    longDescription:
      "Developed a fog-assisted IoT agriculture monitoring system using ESP32 for sensing and Raspberry Pi as a fog node for edge processing. Implemented MQTT communication and cloud synchronization workflows (Google Drive API) for storage and analysis.",
    highlights: [
      "Fog-assisted sensor-to-cloud pipeline using MQTT",
      "Edge processing using Raspberry Pi as a fog node",
      "Cloud synchronization for storage and analysis workflows",
    ],
    responsibilities: [
      "Designed architecture across ESP32 sensing + Raspberry Pi fog processing",
      "Implemented MQTT communication and REST-style data handling",
      "Built cloud sync workflows for analysis and reporting",
    ],
    results: [
      "Enabled reliable sensing and synchronization for monitoring and analysis pipelines",
      "Delivered a complete system architecture suitable for reporting/publication workflows",
    ],
    githubUrl: "",
    liveUrl: "",
  },
];
