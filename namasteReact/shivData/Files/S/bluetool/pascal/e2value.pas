unit e2value;

interface

type
  TE2V_Portico_Areas = record
    area_name: string;
    year_built: string;
    square_footage: string;
  end;

  TE2V_Portico_Items = record
    item_name: string;
    cost: string;
  end;

  TE2V_XML_Request = record
    address1: string;
    address2: string;
    city: string;
    state: string;
    zipcode: string;
    locale: string;
    coverage_a: string;
    architectural_style: string;
    construction_quality: string;
    physical_shape: string;
    construction_type: string;
    recent_renovations: string;
    historic_registry: string;
    primary_exterior: string;
    primary_roof_covering: string;
    year_built: string;
    square_footage: string;
    other_areas: array of TE2V_Portico_Areas;
    unique_items: array of TE2V_Portico_Items;
    replacement_cost_type: string;
    return_acv: boolean;
    structure_in_use: string;
    general: string;
    roof: string;
    wall: string;
    foundation: string;
  end;

  TE2V_XML_Response = record
    status: string;
    resp_message: string;
    replacement_cost: Double;
    acvText: string;
    RawResponse: string;
    acvLow: Double;
    acvHigh: double;
  end;


function ProcessE2Value( var Response: TE2V_XML_Response; const EValueID: integer; const SQLConnection: TSQLConnection ): boolean;

implementation

function ProcessE2Value( var Response: TE2V_XML_Response; const EValueID: integer; const SQLConnection: TSQLConnection ): boolean;
begin
  Result:=True;
end;

end.