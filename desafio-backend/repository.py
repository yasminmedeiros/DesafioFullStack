from sqlalchemy.orm import Session

from models import Estabelecimentos

class EstabelecimentosRepository:
    @staticmethod
    def listarEstabelecimentosPorMunicipio(db: Session, municipioIdSus: int) -> list[Estabelecimentos]:
        return db.query(Estabelecimentos).filter(Estabelecimentos.municipio_id_sus == municipioIdSus)
    @staticmethod
    def obterEstabelecimentoPorId(db: Session, idCnes: int) -> Estabelecimentos:
        return db.query(Estabelecimentos).filter(Estabelecimentos.id_cnes == str(idCnes)).first()