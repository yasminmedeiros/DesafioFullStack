from fastapi import FastAPI, Depends, HTTPException, status, Response
from sqlalchemy.orm import Session

from database import engine, Base, get_db
from repository import EstabelecimentosRepository
from schemas import  EstabelecimentosResponse

Base.metadata.create_all(bind=engine)

app = FastAPI()

@app.get("/estabelecimentosPorMunicipio/{municipioIdSus}", response_model=list[EstabelecimentosResponse])
def listarEstabelecimentosPorMunicipio(municipioIdSus: int, db: Session = Depends(get_db)):
    estabelecimentos = EstabelecimentosRepository.listarEstabelecimentosPorMunicipio(db,municipioIdSus)
    return [EstabelecimentosResponse.from_orm(estabelecimento) for estabelecimento in estabelecimentos]

@app.get("/estabelecimentosPorId/{estabelecimentoId}", response_model=EstabelecimentosResponse)
def obterEstabelecimentoPorId(estabelecimentoId: int, db: Session = Depends(get_db)):
    estabelecimento = EstabelecimentosRepository.obterEstabelecimentoPorId(db, estabelecimentoId)
    return estabelecimento