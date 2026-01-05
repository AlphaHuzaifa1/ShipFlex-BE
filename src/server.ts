import app from "./app";
import config from "./config/env";
import logger from "./services/logger.service";
import connectDB from "./config/database";

connectDB();

const server = app.listen(config.port, () => {
  logger.info(
    `Server running in ${config.nodeEnv} mode on port ${config.port}`
  );
});

process.on("unhandledRejection", (err: Error) => {
  logger.error("UNHANDLED REJECTION! Shutting down...");
  logger.error(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on("uncaughtException", (err: Error) => {
  logger.error("UNCAUGHT EXCEPTION! Shutting down...");
  logger.error(err.name, err.message);
  process.exit(1);
});

process.on("SIGTERM", () => {
  logger.info("SIGTERM received. Shutting down gracefully...");
  server.close(() => {
    logger.info("Process terminated!");
  });
});
