// Forms | Formulários

// Change input value (label) | Mudar valor de campo (rótulo)
jQuery('input').attr('value', 'Submit');

// Change or add input placeholder text | Altera ou adiciona texto descritivo de campo
jQuery('input').attr('placeholder', 'Name');

// Change or add textarea placeholder text | Altera ou adiciona texto descritivo de campo de mensagem
jQuery('textarea').val('Write your message...');


// Change Multiple to Single select | Muda caixa de seleção Múltipla para Singular
jQuery('select').removeAttr('multiple');

// Change Single to Multiple select | Muda caixa de seleção Singular para Múltipla
jQuery('select').attr('multiple', 'multiple');

// Add option in select | Adiciona opção em caixa de seleção
jQuery('select').append('<option value="1">One</option>');

// Convert select into checkbox | Converte caixa de seleção em caixa de verificação
var selectVar = '';
var selectVar = '';
jQuery('select option').each(function(){
	if ( jQuery(this).val() != '') {
		selectVar += '<label><input type="checkbox" value="' + jQuery(this).val() + '" name="' + jQuery(this).parent().attr('name') + '[]" /> ' + jQuery(this).text() + '</label>';
	}
}).parent().after( selectVar ).remove();   



// URLS | Links

// Check URL | Ver link
jQuery('a').attr('href');

// Change URL | Muda link
jQuery('a').attr('href', 'http://pcunha.parallax.studio');

// Change URL target | Muda destino do link
jQuery('a').attr('target', '_blank');

// Current URL properties | Propriedades do link atual
window.location.pathname;
// => /path/example.html
window.location.href;
// full URL => http://pcunha.parallax.studio/example.html
window.location.origin;
// Base URL => http://pcunha.parallax.studio




// Images / Imagens

// Check URL | Ver link
jQuery('img').attr('src');

// Change URL | Muda link
jQuery('img').attr('src', 'http://pcunha.parallax.studio/img.jpg');



// Iframes

// Change URL target | Muda destino do link
jQuery('iframe').attr('target', '_blank');
