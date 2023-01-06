from sqlalchemy import Column, String, Float
from database import Base

# Abaixo é representado a tabela presente no banco de dados e os seus respectivos campos com as tipagens definidas na tabela.
# Foi realizado um pequeno ajuste, que no caso seria a definição do campo id_cnes como chave primária da tabela.

class Estabelecimentos(Base):
    __tablename__ = "estabelecimentos"
    uf_sigla = Column(String(2))
    municipio_id_sus = Column(String(6))
    id_cnes = Column(String(7), primary_key=True ) # Campo definido como chave primária
    nome = Column(String)
    latitude = Column(Float(4))
    longitude = Column(Float(4))
