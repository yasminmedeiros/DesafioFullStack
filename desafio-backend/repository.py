from sqlalchemy.orm import Session

from models import Estabelecimentos

# Aqui é definido as operações realizadas no banco de dados, sendo as que serão realizadas pelas rotas.

class EstabelecimentosRepository:

    # Função que filtra os estabelecimentos vinculados a um município, retornando um array de estabelecimentos
    @staticmethod
    def listarEstabelecimentosPorMunicipio(db: Session, municipioIdSus: int) -> list[Estabelecimentos]:
        return db.query(Estabelecimentos).filter(Estabelecimentos.municipio_id_sus == municipioIdSus)

    # Função que encontra um estabelecimento a partir de um id, e retorna um estabelecimento
    @staticmethod
    def obterEstabelecimentoPorId(db: Session, idCnes: str) -> Estabelecimentos:
        return db.query(Estabelecimentos).filter(Estabelecimentos.id_cnes == idCnes).first()