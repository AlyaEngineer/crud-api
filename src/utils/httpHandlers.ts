import { IncomingMessage, ServerResponse } from 'http';

export const sendResponse = (response: ServerResponse, statusCode: number, data: any) => {
  response.statusCode = statusCode;
  response.end(JSON.stringify(data));
};

export const parseRequestBody = (request: IncomingMessage): Promise<any> => {
  return new Promise((resolve, reject) => {
    let dataBody = '';
    request.on('data', (dataPiece) => (dataBody += dataPiece));
    request.on('end', () => {
      try {
        resolve(JSON.parse(dataBody));
      } catch (error) {
        reject(error);
      }
    });
  });
};
