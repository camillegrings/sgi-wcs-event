'use server'
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

interface IFormInput {
  Email: string
  Name: string
  Phone: string,
  Level: string,
  Role: string,
  Compete: string,
  Tickets: string
}

interface IExcel {
  Email: string
  Nome: string
  Telefone: string,
  'Nível': string,
  'Função': string,
  Pacote: string,
  'Competição': string
}

const FORM_VALUES: { [key: string]: { [key: string]: string } } = {
  Level: {
    0: "Nível 0",
    1: "Nível 1",
    2: "Nível 2",
    3: "Nível 3",
    4: "Nível 4"
  },
  Tickets: {
    1: "Pacote completo",
    2: "Pacote de bailes",
    3: "Baile avulso (sexta)",
    4: "Baile avulso (sábado)",
    5: "Baile avulso (domingo)"
  },
  Compete: {
    1: "Sim - Leader",
    2: "Sim - Follower",
    3: "Não"
  }
}

const FORM_LABEL: { [key: string]: string } = {
  Email: "Email",
  Name: "Nome",
  Phone: "Telefone",
  Level: "Nível",
  Role: "Função",
  Tickets: "Pacote",
  Compete: "Competição"
}

function parseFormDataToExcel(data: { [key: string]: string }) {
  const excelData: { [key: string]: string } = {}

  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const value: string = data[key];

      if (Object.prototype.hasOwnProperty.call(FORM_VALUES, key)) {
        excelData[FORM_LABEL[key]] = FORM_VALUES[key][value]
      } else {
        excelData[FORM_LABEL[key]] = value
      }
    }
  }

  return excelData
}

export default async function sendRegisterForm(data: { [key: string]: string }) {
  try {
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive.file'],
    });

    const doc = new GoogleSpreadsheet('1BK-tGySNxMAyiL-wR5bxHICdDo7iaLcHNilNCtTLW-8', serviceAccountAuth);

    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];
    const row = parseFormDataToExcel(data)

    await sheet.addRow(row);

    return true;
  } catch (error) {
    console.error(error)

    return false;
  }
}