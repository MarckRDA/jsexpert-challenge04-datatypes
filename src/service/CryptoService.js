import Crypto from '../entity/Crypto.js'
import CryptoRepository from '../repository/CryptoRepository.js';

class CryptoService {
  constructor({ repository } = {}) {
    this.repository = repository || new CryptoRepository();
  }
  async *list() {
    let page = 1;
    const limit = 5;
    while (true) {
      const { data } = await this.repository.list(page, limit);
      yield data.map(item => new Crypto(item));

      page += 1;
    }
  }
}

export default CryptoService;