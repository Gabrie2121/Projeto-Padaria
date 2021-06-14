import sqlite3

class TerminalDB:
    def __init__(self, file):
        self.conn = sqlite3.connect(file)
        self.cursor = self.conn.cursor()
    def criar(self,cod):
        sql = 'CREATE TABLE "{}" (qtd REAL, codProduto INTEGER)'.format(cod)
        self.cursor.execute(sql)
    def inserir(self, codComanda, qtd, codProduto):
        sql = 'INSERT OR IGNORE INTO "{}" (qtd,codProduto) VALUES(?,?)'.format(codComanda)
        self.cursor.execute(sql, (qtd, codProduto))
        self.conn.commit()
    def excluir(self, cod,codProduto):
        sql = 'DELETE OR IGNORE FROM "{}" WHERE codProduto=?'.format(cod)
        self.cursor.execute(sql, (codProduto))
        self.conn.commit()
    def fechar(self):
        self.cursor.close()
        self.conn.close()
if __name__ == '__main__':
    terminal  = TerminalDB('C:/Users/gabri/Documents/Programas/Padaria/BasedeDados/terminalTable.db')
    criar = int(input('Gostaria de criar uma nova comanda ou usar uma existente? (1/2) '))
    if criar == 1:
        comanda = input('Digite o codigo da comanda: ')
        try:
            terminal.criar(comanda)
            qtd = float(input('Digite a quantidade a ser adicionada:'))
            codProduto = int(input('Digite o codigo do produto:'))
            terminal.inserir(comanda, qtd, codProduto)
            print(f'Inserido o produto {codProduto} {qtd} vezes na comanda {comanda}')
        except:
            print('Essa Tabela ja foi criada')

    elif criar == 2:
        try:
            comanda = input('Digite o codigo da comanda: ')
            qtd = float(input('Digite a quantidade a ser adicionada:'))
            codProduto = int(input('Digite o codigo do produto:'))
            terminal.inserir(comanda, qtd, codProduto)
            print(f'Inserido o produto {codProduto} {qtd} vezes na comanda {comanda}')
        except:
            print('Esta comanda não está criada')













    
    
    