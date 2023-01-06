from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Nesse arquivo é feito a definição da função que irá conextar com o banco de dados

SQLALCHEMY_DATABASE_URL = "sqlite:///./dados.db" # Definição do diretório do banco de dados

engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

# Função que irá tratarda conexão e da desconexão do banco de dados.
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()