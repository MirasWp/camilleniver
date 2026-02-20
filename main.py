import pywhatkit as kit

# Número de telefone do destinatário (formato internacional, sem espaços ou hífens)
phone_number = "+5511982293164 "  # Exemplo: substitua pelo número real

# Mensagem a ser enviada
message = "oi oi sou um bot de zapzap feito pelo lucas, essa é uma mensagem programada,"  \
"ele está trabalhando a essas e queria que você desse uma olhada nisso" \
"click here: https://miraswp.github.io/camilleniver/ " \
"Feliz Aniversário camille. Eu te amo 🩷 " \
"Spoiler do seu Presente: https://www.editorafrutoproibido.com.br/kit-edicao-de-colecionador-box-em-capa-dura" \
"espero que goste "  # Substitua pela mensagem desejada

# Envia a mensagem às 00:00 (hora e minuto especificados)
# Nota: Isso agenda para hoje; para datas futuras, rode o script no dia correto.
kit.sendwhatmsg(phone_number, message, 0, 0)  # 0 = hora, 0 = minuto

# Opcional: Fecha a aba do navegador após 3 segundos (padrão)
# kit.sendwhatmsg(phone_number, message, 0, 0, tab_close=True, close_time=3)