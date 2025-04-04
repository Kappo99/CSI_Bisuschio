export default interface IFattoSignificativo {
    Id: number;
    Id_Giornata: number;
    Mattina: string | null;
    Pomeriggio: string | null;
    Sera: string | null;
    IsPreferito: boolean;
    Creation: string;
    Timestamp: string;
}

export const exampleFattoSignificativo: IFattoSignificativo = {
    Id: 0,
    Id_Giornata: 0,
    Mattina: null,
    Pomeriggio: null,
    Sera: null,
    IsPreferito: false,
    Creation: '',
    Timestamp: '',
};
