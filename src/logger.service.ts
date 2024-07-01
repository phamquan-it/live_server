// src/logger.service.ts
import { Injectable } from '@nestjs/common';
import { createLogger, format, transports } from 'winston';
import * as path from 'path';
import * as fs from 'fs';

interface LogEntry {
  timestamp: string;
  level: string;
  message: string;
}

const logDir = path.resolve(__dirname, '..', 'logs');
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

@Injectable()
export class LoggerService {
  private readonly logger = createLogger({
    format: format.combine(
      format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
      }),
      format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
    ),
    transports: [
      new transports.File({ filename: path.join(logDir, 'combined.log') }),
    ],
  });

  log(message: string) {
    this.logger.log({ level: 'info', message, timestamp: new Date().toISOString() } as LogEntry);
  }

  error(message: string, trace: string) {
    this.logger.error({ level: 'error', message, timestamp: new Date().toISOString(), trace } as LogEntry);
  }

  warn(message: string) {
    this.logger.warn({ level: 'warn', message, timestamp: new Date().toISOString() } as LogEntry);
  }

  debug(message: string) {
    this.logger.debug({ level: 'debug', message, timestamp: new Date().toISOString() } as LogEntry);
  }

  verbose(message: string) {
    this.logger.verbose({ level: 'verbose', message, timestamp: new Date().toISOString() } as LogEntry);
  }
}
