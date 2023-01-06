from pydantic import BaseModel

# Aqui é estabelecida uma classe que define qual o formato das informações que devem ser retornadas após a operação realizada no banco de dados.

class EstabelecimentosResponse(BaseModel):
    id_cnes: str
    uf_sigla: str
    municipio_id_sus: str
    nome: str
    latitude: float
    longitude:float

    # O orm_mode definido como True indica que o formato que os dados irão ser trazidos para a conversão no formato aqui definido na classe.
    class Config:
        orm_mode = True 