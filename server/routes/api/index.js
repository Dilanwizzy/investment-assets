import express from 'express';
import server from './server';
import assets from './assets';

const router = express.Router();

router.get('/server/info', server.getServerInfo);
router.get('/assets/', assets.getCryptoValues);
router.get('/assets/crypto', assets.getCyrptoAssetValues);
router.post('/assets/crypto', assets.newCryptoAsset);
router.patch('/assets/crypto', assets.updateCryptoAsset);

export default router;
