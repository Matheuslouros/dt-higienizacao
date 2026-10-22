# Painel administrativo D&T Higienização

## Páginas

- Site público: `/` (sem opções de edição).
- Painel privado: `/painel` (também disponível em `/admin`).
- Cabeçalho do painel: **Painel Matheus Louros** | D&T Higienização.
- Gestão de fotos, vídeos, títulos e senha. As novas mídias aparecem na Home e na página de Depoimentos; as mídias antigas continuam intactas.

## Banco de dados (já pronto)

Supabase do projeto: `lgjlqseypfznqjhutduu`.
O administrador `78268e19-c3f6-46fa-935d-bc16551e084d` já consta em `public.site_admins`.
Existe bucket público `dt-media`, com políticas RLS de edição para administradores, e tabela `public.site_media` com leitura dos registros publicados.

Não é necessário criar novo usuário, bucket ou tabelas.

## Variáveis de ambiente na Vercel

Adicione no projeto **dt-higienizacao** (repositório `Matheuslouros/dt-higienizacao`):

- `REACT_APP_SUPABASE_URL=https://lgjlqseypfznqjhutduu.supabase.co`
- `REACT_APP_SUPABASE_PUBLISHABLE_KEY` = chave pública ativa `sb_publishable_...` do Supabase.

**Nunca colocar a chave secreta ou service_role no frontend.**
Após configurar, publique a atualização e faça redeploy (variáveis do CRA entram no build).

## Testes recomendados

1. Acesse `/painel` e entre com o administrador.
2. Envie uma foto e depois um vídeo de até 40MB; confira ambos na Home e em Depoimentos.
3. Edite o título e depois exclua um arquivo; confira atualização após recarregar.
4. Troque a senha e teste a nova senha.
5. Verifique que outros usuários não podem enviar, editar ou excluir arquivos.
6. Teste recarregar a rota `/painel` diretamente no navegador.

O código só está em uma branch/PR até que o responsável publique na Vercel.
