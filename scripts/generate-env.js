const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const envFilePath = path.join(rootDir, '.env');
const outputFilePath = path.join(rootDir, 'src', 'environments', 'environment.generated.ts');

function parseEnvFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return {};
  }

  const content = fs.readFileSync(filePath, 'utf8');
  return content.split(/\r?\n/).reduce((acc, line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) {
      return acc;
    }

    const separatorIndex = trimmed.indexOf('=');
    if (separatorIndex === -1) {
      return acc;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    let value = trimmed.slice(separatorIndex + 1).trim();

    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    acc[key] = value;
    return acc;
  }, {});
}

const envValues = parseEnvFile(envFilePath);
const testKey = envValues.RAZORPAY_KEY_TEST || 'rzp_test_GqAs1q7wdge37g';
const liveKey = envValues.RAZORPAY_KEY_LIVE || 'your_live_razorpay_key_here';

const content = `export const envConfig = {
  razorpay: {
    testKey: '${testKey.replace(/'/g, "\\'")}',
    liveKey: '${liveKey.replace(/'/g, "\\'")}'
  }
};
`;

fs.writeFileSync(outputFilePath, content, 'utf8');
console.log(`Generated Angular env config at ${path.relative(rootDir, outputFilePath)}`);
