exports.multiplicar = function(num, min, max) {
    var salida = '';
    if (num) {
        salida += '<h2>Tabla del ' + num + '</h2>';
        for (z = 0; z <= 10; z++) {
            salida += num + ' x ' + z + ' = ' + num * z + '<br />';
        }
    } else if (min & max) {
        salida += '<h2>Tabla del ' + min + '</h2>';
        for (z = 0; z <= 10; z++) {
            salida += min + ' x ' + z + ' = ' + min * z + '<br />';
        }
        salida += '<h2>Tabla del ' + max + '</h2>';
        for (z = 0; z <= 10; z++) {
            salida += max + ' x ' + z + ' = ' + max * z + '<br />';
        }
    } else {
        var salida = '';
        for (i = 0; i <= 10; i++) {
            salida += '<h2>Tabla del ' + i + '</h2>';
            for (z = 0; z <= 10; z++) {
                salida += i + ' x ' + z + ' = ' + i * z + '<br />';
            }
        }
    }
    return salida
}