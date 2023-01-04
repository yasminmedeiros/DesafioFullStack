from pydantic import BaseModel

    

class EstabelecimentosResponse(BaseModel):
    id_cnes: str
    uf_sigla: str
    municipio_id_sus: str
    nome: str
    latitude: float
    longitude:float

    class Config:
        orm_mode = True