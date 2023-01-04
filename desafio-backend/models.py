from sqlalchemy import Column, Integer, String, Float
from database import Base


class Estabelecimentos(Base):
    __tablename__ = "estabelecimentos"

    uf_sigla = Column(String(2))
    municipio_id_sus = Column(String(6))
    id_cnes = Column(String(7), primary_key=True )
    nome = Column(String)
    latitude = Column(Float(4))
    longitude = Column(Float(4))
