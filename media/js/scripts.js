function montaTabela(titulo, subtitulo, molde, processamento, degradacao, fusao, hdt, deUso, temperatura, tempo, estrutura, opacidade, aspecto, resistencia, densidade, contracao, velocidade, material){
			document.write('<table style="width: 100%;"  border="1px" bordercolor="#666666"><tr><td class="title">'+titulo+'</td><td class="title">'+subtitulo+'</td></tr><tr class="tabelaLaranjaEscuro"><td style="text-align:center;" COLSPAN="2">TEMPERATURAS (ºC)</td></tr><tr class="tabelaLaranja"><td>MOLDE</td><td>'+molde+'</td></tr><tr class="tabelaLaranja"><td>PROCESSAMENTO</td><td>'+processamento+'</td></tr><tr class="tabelaLaranja"><td>DEGRADAÇÃO</td><td>'+degradacao+'</td></tr><tr class="tabelaLaranja"><td>FUSÃO</td><td>'+fusao+'</td></tr><tr class="tabelaLaranja"><td>HDT</td><td>'+hdt+'</td></tr><tr class="tabelaLaranja"><td>DE USO (PRODUTO)</td><td>'+deUso+'</td></tr><tr class="tabelaAzulEscuro"><td style="text-align:center;" COLSPAN="2">SECAGEM</td></tr><tr class="tabelaAzul"><td>TEMPERATURA</td><td>'+temperatura+'</td></tr><tr class="tabelaAzul"><td>TEMPO</td><td>'+tempo+'</td></tr><tr class="tabelaCinzaEscuro"><td style="text-align:center;" COLSPAN="2">PROPRIEDADES FÍSICAS</td></tr><tr class="tabelaCinza"><td>ESTRUTURA</td><td>'+estrutura+'</td></tr><tr class="tabelaCinza"><td>OPACIDADE</td><td>'+opacidade+'</td></tr><tr class="tabelaCinza"><td>ASPECTO FÍSICO</td><td>'+aspecto+'</td></tr><tr class="tabelaCinza"><td>RESIST. AO IMPACTO</td><td>'+resistencia+'</td></tr><tr class="tabelaCinza"><td>DENSIDADE</td><td>'+densidade+'</td></tr><tr class="tabelaCinza"><td>CONTRAÇÃO</td><td>'+contracao+'</td></tr><tr class="tabela"><td style="text-align:center;" COLSPAN="2">INFORMAÇÕES ADICIONAIS</td></tr><tr class="tabela"><td>VEL. DE INJEÇÃO</td><td>'+velocidade+'</td></tr><tr class="tabela"><td>MAT PARA PURGA</td><td>'+material+'</td></tr></table>');
		};