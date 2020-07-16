// Add content before .x | Adiciona conteúdo antes de .x
jQuery('.x').before('<div>Hello World!</div>');

// Add content after .x | Adiciona conteúdo depois de .x
jQuery('.x').after('<div>Hello World!</div>');



// Add content inside .x at the beginning | Adiciona conteúdo dentro de .x no início
jQuery('.x').prepend('<div>Hello World!</div>');

// Add content inside .x at the end | Adiciona conteúdo dentro de .x no fim
jQuery('.x').append('<div>Hello World!</div>');



// Wrap .x with div .y | Envolve .x com div .y
jQuery('.x').wrap('<div class="y"></div>');
jQuery('.x').wrap('<div class="y" />');

// Wrap .x children with div .y | Envolve filhos de .x com div .y
jQuery('.x').wrapInner('<div class="y"></div>');
jQuery('.x').wrapInner('<div class="y" />');

// Unwrap .x from parent (deletes the parent) | Remove .x de dentro de seu pai (deleta o pai)
jQuery('.x').unwrap();



// Clone .x e move para dentro de .y | Duplica .x e move para dentro de .y
jQuery('.x').clone().prependTo('.y');



// Replace .x with content | Substitui .x por conteúdo
jQuery('div.x').replaceWith('<h2>New text</h2>');

// Replace .x with .y | Substitui .x por .y
jQuery('div.x').replaceWith( jQuery('.x') );



// Deletes .x | Remove .x
jQuery('.x').remove();
