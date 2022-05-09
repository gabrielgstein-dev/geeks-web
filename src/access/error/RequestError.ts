export class RequestError extends Error {
  constructor(code: number) {
    super();
    this.name = 'RequestError';

    this.findCauseMessage(code);
  }

  findCauseMessage(code: number): void {
    switch (code) {
      case 300:
        this.message = 'Erro ao comunicar com servidor';
        break;

      case 401:
        this.message = 'Credenciais inválidas';
        break;

      case 403:
        this.message = 'Erro ao requisitar informação';
        break;

      default:
        this.message = 'Erro ao comunicar com servidor';
        break;
    }
  }
}
