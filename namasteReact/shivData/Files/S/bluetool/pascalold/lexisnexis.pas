unit lexisnexis2;

interface

uses
  Stingray;

var
  t : Integer;

type 
  TLNPerson = record
    DLNumber: string;
    DLState: string;
    NameFirst: string;
    NameLast: string;
    NameMiddle: string;
    NamePrefix: string;
    NameSuffix: string;
    SSN: string;
    Birth: TDateTime;
  end;

  TLNAddress = record
    Street:  string;
    App: string;
    City:  string;
    State:  string;
    ZipCode: string;
  end;

  TLexisNexisSource = record
    HostIP : string;
    Port: string;
                   
    // used by SIDE
    LNAccount: string;
    CarrierAcc: string;
    isAgency: string;
    AppID: string;
    ClientID: string;
                   
    // used by Vend
    Carrier: string;
    ModelID: string;
    isAuto: integer;
  end;

  TRawResult = record   
    RawRequest: string;
    RawResult: string;
  end;

implementation

end.