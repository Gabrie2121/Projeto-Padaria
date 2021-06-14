import sqlite3
# criar uma tabela para cada comanda
class TerminalDB:
    def __init__(self, file):
        self.conn = sqlite3.connect(file)
        self.cursor = self.conn.cursor()
    def inserir(self, codComanda, qtd, codProduto):
        sql = 'INSERT OR IGNORE INTO comanda (codComanda,qtd,codProduto) VALUES(?,?,?)'
        self.cursor.execute(sql, (codComanda, qtd, codProduto))
        self.conn.commit()
    def excluir(self, codComanda):
        sql = 'DELETE FROM comanda WHERE codComanda=?'
        self.cursor.execute(sql, (codComanda,))
        self.conn.commit()
    def fechar(self):
        self.cursor.close()
        self.conn.close()

if __name__ == '__main__':
    terminal  = TerminalDB('C:/Users/gabri/Documents/Programas/Padaria/BasedeDados/terminal.db')
    comanda = int(input('Digite o codigo da comanda: '))
    acao = input('Gostaria de excluir ou inserir? Digitar(1/2): ')
    
    if acao == '1':
        print(f'Gostaria de excluir a comanda {comanda}? ')
        try:
            terminal.excluir(comanda)
            print('Comanda excluida')
        except:
            print('Não existe essa comanda')

    elif acao == '2':
        qtd = float(input('Digite a quantidade a ser adicionada:'))
        codProduto = int(input('Digite o codigo do produto:'))
        terminal.inserir(comanda, qtd, codProduto)
        print(f'Inserido o produto {codProduto} {qtd} vezes na comanda {comanda}')

    else: 
        print('Não encontrado essa ação')
    