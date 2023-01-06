from fastapi import FastAPI, Depends, HTTPException, Query
from sqlalchemy.orm import Session

#Realizando a importação das funcionalidades desenvolvidas.
from database import engine, Base, get_db
from repository import EstabelecimentosRepository
from schemas import  EstabelecimentosResponse

Base.metadata.create_all(bind=engine)

app = FastAPI() 

# Criação da rota de Estabelecimentos por Município, que recebe o id do município e retorna um array de 
# estabelecimentos no formato definido pela classe EstabelecimentosResponse.
@app.get("/estabelecimentosPorMunicipio/{municipioIdSus}", response_model=list[EstabelecimentosResponse])
def listarEstabelecimentosPorMunicipio(municipioIdSus: int , db: Session = Depends(get_db)):
    estabelecimentos = EstabelecimentosRepository.listarEstabelecimentosPorMunicipio(db,municipioIdSus)
    return [EstabelecimentosResponse.from_orm(estabelecimento) for estabelecimento in estabelecimentos]

# Criação da rota de Estabelecimentos por Id, que recebe o id do estabelecimento e retorna um json com o 
# estabelecimento no formato definido pela classe EstabelecimentosResponse.
@app.get("/estabelecimentosPorId/{estabelecimentoId}", response_model=EstabelecimentosResponse)
def obterEstabelecimentoPorId(estabelecimentoId: str = Query(min_length=7), db: Session = Depends(get_db)):
    estabelecimento = EstabelecimentosRepository.obterEstabelecimentoPorId(db, estabelecimentoId)

    # Exceção lançada se o estabelecimento não existir, já que se este não existir estabelecimento se torna uma variável vazia.
    if not estabelecimento:
        raise HTTPException(status_code=404, detail="O estabelecimento não existe no banco de dados")
    
    return estabelecimento