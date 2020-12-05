# この記事は
[悠里・大宇宙界隈 Advent Calendar 2020](https://adventar.org/calendars/5491) 6日目の記事です。   

## 前座
二次創作ssを書こうとしたら理語で詩を書く必要が生えたのでリパライン語の韻律を勉強したところ、韻律を自動で長短にわけてくれるツールが欲しくなった。  

しかしリパライン語にはf***ai***のように1音節で区切るものとknl***oa***nのように2つの音節にまたがる重母音がある。
これらがどういう規則になっているかを調べるため、[辞書](http://zpdic.ziphil.com/dictionary/80)から正規表現(`[aiueoy]{3,}`)を用いて母音字が三つ以上連続する語を調べ、リストアップした。  
aiarなど、同じ語根のもので他に三重以上の母音が登場しないものは除外している。  

本格的な解析は後日行うことにする。  

<details>
    <summary>一覧 (161語)</summary>
    <ul>
        <li>acelorvuies</li>
        <li>acesnosturijoium</li>
        <li>aiar</li>
        <li>aiescantlirxa</li>
        <li>akrantierl</li>
        <li>akrantiium</li>
        <li>alcirtaium</li>
        <li>alefisseeunascher</li>
        <li>anfhiuera</li>
        <li>anfieium</li>
        <li>antkaiufka</li>
        <li>arteiumem</li>
        <li>arulfaoes</li>
        <li>arxaiem</li>
        <li>astaneuatviata</li>
        <li>astietofryium</li>
        <li>asvieu</li>
        <li>caiovlieiz</li>
        <li>celaium</li>
        <li>ciaugard</li>
        <li>cliarcyeust</li>
        <li>cuturletostiain</li>
        <li>daliues</li>
        <li>deiet</li>
        <li>deleye</li>
        <li>delnuiel</li>
        <li>desvegiuax</li>
        <li>dieest</li>
        <li>dirjeium</li>
        <li>diueslexausoorl</li>
        <li>diuosen</li>
        <li>eailsnort</li>
        <li>eiflieya</li>
        <li>eiumo</li>
        <li>ennynieum</li>
        <li>eteskaitejafa</li>
        <li>euenelstein</li>
        <li>euiccowelertz</li>
        <li>faiium</li>
        <li>faion</li>
        <li>fakhdeien</li>
        <li>fallerrgeuen</li>
        <li>faoen</li>
        <li>faorcelaium</li>
        <li>farkafontaceeu</li>
        <li>feleies</li>
        <li>fenguacapeaust</li>
        <li>fenteietosten</li>
        <li>fentetieesnolen</li>
        <li>ferkacyfoial</li>
        <li>ferlesexiayl</li>
        <li>feustirsykalaxiaon</li>
        <li>fevaiarj</li>
        <li>fiie</li>
        <li>fikenaleaes</li>
        <li>fmeaene</li>
        <li>foiask</li>
        <li>foiium</li>
        <li>fonticcoium</li>
        <li>fuicveiumer</li>
        <li>harmiees</li>
        <li>hartlirfaea</li>
        <li>heyo</li>
        <li>icveain</li>
        <li>ininolaxiailo</li>
        <li>iulauainium</li>
        <li>ivejaierk</li>
        <li>ixtikteeuer</li>
        <li>jamfyptiyel</li>
        <li>jeie</li>
        <li>jiedopaielesa</li>
        <li>jouist</li>
        <li>juiust</li>
        <li>juklohiioj</li>
        <li>kayet</li>
        <li>kiaecinc</li>
        <li>kieyj</li>
        <li>kilijoien</li>
        <li>kirveoufker</li>
        <li>klieeskero</li>
        <li>klieo</li>
        <li>klomceies</li>
        <li>krantiestaium</li>
        <li>kraxaiun</li>
        <li>kyrtaoanfy</li>
        <li>liues</li>
        <li>la cheksauen-cyfoi</li>
        <li>laoziaer</li>
        <li>lartaiumeulyr</li>
        <li>leium</li>
        <li>leiurgel</li>
        <li>lersseain</li>
        <li>lerssiaoes</li>
        <li>lfamieahch</li>
        <li>liaoll</li>
        <li>liea</li>
        <li>liey</li>
        <li>lipalaione</li>
        <li>liueiu</li>
        <li>marsvaeazarklirs</li>
        <li>meiaqerz</li>
        <li>menieaciefen</li>
        <li>merlieium</li>
        <li>moliupiaium</li>
        <li>muaes</li>
        <li>nabiua</li>
        <li>nebiuaal</li>
        <li>nefphieiliavust</li>
        <li>neiue</li>
        <li>nieoticcael</li>
        <li>niuax-</li>
        <li>noiev</li>
        <li>nuiel</li>
        <li>nultieit</li>
        <li>nyey</li>
        <li>paltauil</li>
        <li>paskexneaustan</li>
        <li>pistoiarr</li>
        <li>plascakurftiaium</li>
        <li>pleiumeulyr</li>
        <li>poltaiares</li>
        <li>puaien</li>
        <li>puoi</li>
        <li>qaie</li>
        <li>reroteain</li>
        <li>sieod</li>
        <li>sneiet</li>
        <li>snelyium</li>
        <li>snieal</li>
        <li>snieal</li>
        <li>snieist</li>
        <li>sooduaines</li>
        <li>steaust</li>
        <li>stelaium</li>
        <li>stieyst</li>
        <li>sykueurn</li>
        <li>syuisn</li>
        <li>tasniau</li>
        <li>tesnokaloaelen</li>
        <li>tieesn</li>
        <li>tifidiaes</li>
        <li>tifidiaustes</li>
        <li>tlyoairnirl</li>
        <li>uies</li>
        <li>vaiyfait</li>
        <li>vaoikvel</li>
        <li>vdeiedey</li>
        <li>vieyj</li>
        <li>vismoua</li>
        <li>viuium</li>
        <li>xedyiek</li>
        <li>xeier</li>
        <li>xesykueurn</li>
        <li>xillaium</li>
        <li>xipiaiumeulyr</li>
        <li>xipiaoen</li>
        <li>ysdaiedom</li>
        <li>ysitoiylen</li>
        <li>yuesleone/iuesleone</li>
        <li>yuihurk</li>
        <li>yziyiosni</li>
    </ul>
</details>

## 四重母音
<details open>
    <summary></summary>
    <ul>
        <li>f<b>aiiu</b>m</li>
        <li>neb<b>iuaa</b>l</li>
        <li>f<b>oiiu</b>m</li>
        <li>iul<b>auai</b>nium</li>
        <li>ixtikt<b>eeue</b>r</li>
        <li>n<b>eiue</b></li>
        <li>p<b>uaie</b>n</li>
        <li>tl<b>yoai</b>rnirl</li>
        <li>v<b>iuiu</b>m</li>
        <li>xip<b>iaiu</b>meulyr</li>
        <li>xip<b>iaoe</b>n</li>
        <li>yz<b>iyio</b>sni</li>
    </ul>
</details>

## 五重母音
<ul>
    <li>l<b>iueiu</b></li>
</ul>

## 固有名詞
<details>
    <summary></summary>
    <ul>
        <li><b>yue</b>sleone/<b>iue</b>sleone</li>
        <li>v<b>aiy</b>fait</li>
        <li>k<b>iae</b>cinc</li>
        <li>l<b>iea</b></li>
        <li>l<b>iey</b></li>
        <li>pist<b>oia</b>rr</li>
    </ul>
</details>

## 接辞による連続とみられるもの
辞書と比べての語根分析は行っていないため、分類は正しくない可能性があることに注意。  
### -ain
<details open>
    <summary></summary>
    <ul>
        <li>icveain</li>
        <li>cuturletostiain</li>
        <li>iulauainium</li>
        <li>lersseain</li>
        <li>reroteain</li>
        <li>sooduaines</li>
    </ul>
</details>

### -ium
<details open>
    <summary></summary>
    <ul>
        <li>eiumo</li>
        <li>celaium</li>
        <li>krantiestaium</li>
        <li>acesnosturijoium</li>
        <li>akrantiium</li>
        <li>alcirtaium</li>
        <li>anfi'eium</li>
        <li>asti'etofryium</li>
        <li>dirjeium</li>
        <li>arteiumem</li>
        <li>faiium</li>
        <li>faorcelaium</li>
        <li>foiium</li>
        <li>fonticcoium</li>
        <li>fuicveiumer</li>
        <li>iulauainium</li>
        <li>pleiumeulyr</li>
        <li>lartaiumeulyr</li>
        <li>leium</li>
        <li>merli'eium</li>
        <li>moliupi'aium</li>
        <li>plascakurfti'aium</li>
        <li>snelyium</li>
        <li>stelaium</li>
        <li>viuium</li>
        <li>xillaium</li>
        <li>xipiaiumeulyr</li>
    </ul>
</details>

### -eum
<ul>
    <li>ennynieum</li>
</ul>

### -ust
<details open>
    <summary></summary>
    <ul>
        <li>cliarcyeust</li>
        <li>fenguacapeaust</li>
        <li>feustirsykalaxiaon</li>
        <li>juiust</li>
        <li>paskexneaustan</li>
        <li>steaust</li>
        <li>tifidiaustes</li>
    </ul>
</details>

### -es
<details open>
    <summary></summary>
    <ul>
        <li>acelorvuies</li>
        <li>l'iues</li>
        <li>arulfaoes</li>
        <li>aiescantlirxa</li>
        <li>daliues</li>
        <li>diueslexausoorl</li>
        <li>feleies</li>
        <li>fentetieesnolen</li>
        <li>fikenaleaes</li>
        <li>harmiees</li>
        <li>klieeskero</li>
        <li>klomceies</li>
        <li>lerssi'aoes</li>
        <li>muaes</li>
        <li>tifidiaes</li>
        <li>uies</li>
    </ul>
</details>

### -on
<details open>
    <summary></summary>
    <ul>
        <li>faion</li>
        <li>feustirsykalaxiaon</li>
    </ul>
</details>

### -en
<details open>
    <summary></summary>
    <ul>
        <li>kilijoien</li>
        <li>euenelstein</li>
        <li>fakhdeien</li>
        <li>fallerrgeuen</li>
        <li>faoen</li>
        <li>fmeaene</li>
        <li>(la) cheksauen-cyfoi</li>
        <li>puaien</li>
        <li>tesnokaloaelen</li>
        <li>xipiaoen</li>
    </ul>
</details>

### -era
<ul>
    <li>anfhiuera</li>
</ul>

### -er
<details open>
    <summary></summary>
    <ul>
        <li>laoziaer</li>
        <li>ivejaierk</li>
        <li>ixtikteeuer</li>
        <li>xeier</li>
    </ul>
</details>

### -al
<details open>
    <summary></summary>
    <ul>
        <li>snieal</li>
        <li>ferkacyfoial</li>
        <li>nebiuaal</li>
        <li>snieal</li>
        <li>tesnokaloaelen</li>
    </ul>
</details>

### -el
<details open>
    <summary></summary>
    <ul>
        <li>jamfyptiyel</li>
        <li>delnuiel</li>
        <li>nuiel</li>
        <li>jiedopaielesa</li>
        <li>tesnokaloaelen</li>
    </ul>
</details>

### -yl
<details open>
    <summary></summary>
    <ul>
        <li>ferlesexiayl</li>
        <li>ysitoiylen</li>
    </ul>
</details>

### -o
<details open>
    <summary></summary>
    <ul>
        <li>kilijoien</li>
        <li>lipalaione</li>
        <li>arulfaoes</li>
        <li>diuosen</li>
        <li>faion</li>
        <li>faoen</li>
        <li>ferkacyfoial</li>
        <li>foiask</li>
        <li>foiium</li>
        <li>fonticcoium</li>
        <li>heyo</li>
        <li>jouist</li>
        <li>juklohiioj</li>
        <li>kirveoufker</li>
        <li>kyrtaoanfy</li>
        <li>lerssi'aoes</li>
        <li>nieoticcael</li>
        <li>klieo</li>
        <li>pistoiarr</li>
        <li>puoi</li>
        <li>tesnokaloaelen</li>
        <li>tlyoairnirl</li>
        <li>vaoikvel</li>
        <li>xipiaoen</li>
        <li>ysitoiylen</li>
        <li>yziyiosni</li>
    </ul>
</details>

## 重母音の種類による分類
### a-
<details open>
<summary></summary>
    <ul>
        <li>
            <details open>
                <summary>aye</summary>
                <ul>
                    <li>kayet</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>aea</summary>
                <ul>
                    <li>hartlirfaea</li>
                    <li>marsvaeazarklirs</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>aoa</summary>
                <ul>
                    <li>kyrtaoanfy</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
            <summary>aoe</summary>
            <ul>
                <li>arulfaoes</li>
                <li>faoen</li>
                <li>lerssi'aoes</li>
                <li>xipiaoen</li>
            </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>aoi</summary>
                <ul>
                    <li>vaoikvel</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
            <summary>aia</summary>
            <ul>
                <li>aiar</li>
                <li>poltaiares</li>
                <li>fevaiarj</li>
            </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>aiy</summary>
                <ul>
                    <li>vaiyfait</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
            <summary>aie</summary>
            <ul>
                <li>arxaiem</li>
                <li>aiescantlirxa</li>
                <li>ivejaierk</li>
                <li>jiedopaielesa</li>
                <li>puaien</li>
                <li>qaie</li>
                <li>ysdaiedom</li>
            </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>aio</summary>
                <ul>
                    <li>lipalaione</li>
                    <li>caiovli'eiz</li>
                    <li>faion</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>aii</summary>
                <ul>
                    <li>faiium</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
            <summary>aiu</summary>
            <ul>
                <li>celaium</li>
                <li>krantiestaium</li>
                <li>alcirtaium</li>
                <li>antkaiufka</li>
                <li>faorcelaium</li>
                <li>kraxaiun</li>
                <li>lartaiumeulyr</li>
                <li>moliupi'aium</li>
                <li>plascakurfti'aium</li>
                <li>stelaium</li>
                <li>xillaium</li>
                <li>xipiaiumeulyr</li>
            </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>aua</summary>
                <ul>
                    <li>iulauainium</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
            <summary>aue</summary>
            <ul>
            la cheksauen-cyfoi
            </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>aui</summary>
                <ul>
                    <li>paltauil</li>
                </ul>
            </details>
        </li>
    </ul>
</details>

### y-
<details open>
    <summary></summary>
    <ul>
        <li>
            <details open>
                <summary>yey</summary>
                <ul>
                    <li>nyey</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>yeu</summary>
                <ul>
                    <li>cliarcyeust</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>yoa</summary>
                <ul>
                    <li>tlyoairnirl</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>yie</summary>
                <ul>
                    <li>xedyiek</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>yio</summary>
                <ul>
                    <li>yziyiosni</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>yiu</summary>
                <ul>
                    <li>asti'etofryium</li>
                    <li>snelyium</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>yue</summary>
                <ul>
                    <li>yuesleone/iuesleone</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>yui</summary>
                <ul>
                    <li>syuisn</li>
                    <li>yuihurk</li>
                </ul>
            </details>
        </li>
    </ul>
</details>

### e-
<details open>
    <summary></summary>
    <ul>
        <li>
            <details open>
                <summary>eae</summary>
                <ul>
                    <li>fikenaleaes</li>
                    <li>fmeaene</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>eai</summary>
                <ul>
                    <li>icveain</li>
                    <li>eailsnort</li>
                    <li>lersseain</li>
                    <li>reroteain</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>eau</summary>
                <ul>
                    <li>fenguacapeaust</li>
                    <li>paskexneaustan</li>
                    <li>steaust</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>eya</summary>
                <ul>
                    <li>eifli'eya</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>eye</summary>
                <ul>
                    <li>deleye</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>eyo</summary>
                <ul>
                    <li>heyo</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>eeu</summary>
                <ul>
                    <li>alefisseeunascher</li>
                    <li>farkafontaceeu</li>
                    <li>ixtikteeuer</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>eou</summary>
                <ul>
                    <li>kirveoufker</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>eia</summary>
                <ul>
                    <li>meiaqerz</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>eie</summary>
                <ul>
                    <li>sneiet</li>
                    <li>deiet</li>
                    <li>fakhdeien</li>
                    <li>feleies</li>
                    <li>fenteietosten</li>
                    <li>jeie</li>
                    <li>klomceies</li>
                    <li>vdeiedey</li>
                    <li>xeier</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>eiu</summary>
                <ul>
                    <li>eiumo</li>
                    <li>anfi'eium</li>
                    <li>liueiu</li>
                    <li>dirjeium</li>
                    <li>arteiumem</li>
                    <li>fuicveiumer</li>
                    <li>pleiumeulyr</li>
                    <li>leium</li>
                    <li>leiurgel</li>
                    <li>liueiu</li>
                    <li>merli'eium</li>
                    <li>neiue</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>eua</summary>
                <ul>
                    <li>astaneuatviata</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>eue</summary>
                <ul>
                    <li>euenelstein</li>
                    <li>fallerrgeuen</li>
                    <li>ixtikteeuer</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>eui</summary>
                <ul>
                    <li>euiccowelertz</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>oae</summary>
                <ul>
                    <li>tesnokaloaelen</li>
                </ul>
            </details>
        </li>
    </ul>
</details>

### o-
<details open>
    <summary></summary>
    <ul>
        <li>
            <details open>
                <summary>oai</summary>
                <ul>
                    <li>tlyoairnirl</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>oia</summary>
                <ul>
                    <li>ferkacyfoial</li>
                    <li>foiask</li>
                    <li>pistoiarr</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>oiy</summary>
                <ul>
                    <li>ysitoiylen</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>oie</summary>
                <ul>
                    <li>kilijoien</li>
                    <li>noiev</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>oii</summary>
                <ul>
                    <li>foiium</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>oiu</summary>
                <ul>
                    <li>acesnosturijoium</li>
                    <li>fonticcoium</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>oua</summary>
                <ul>
                    <li>vismoua</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>oui</summary>
                <ul>
                    <li>jouist</li>
                </ul>
            </details>
        </li>
    </ul>
</details>

### i-
<details open>
    <summary></summary>
    <ul>
        <li>
            <details open>
                <summary>iay</summary>
                <ul>
                    <li>ferlesexiayl</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>iae</summary>
                <ul>
                    <li>laoziaer</li>
                    <li>kiaecinc</li>
                    <li>tifidiaes</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>iao</summary>
                <ul>
                    <li>liaoll</li>
                    <li>feustirsykalaxiaon</li>
                    <li>xipiaoen</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>iai</summary>
                <ul>
                    <li>cuturletostiain</li>
                    <li>ininolaxiailo</li>
                    <li>xipiaiumeulyr</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>iau</summary>
                <ul>
                    <li>ciaugard</li>
                    <li>tasniau</li>
                    <li>tifidiaustes</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>iye</summary>
                <ul>
                    <li>jamfyptiyel</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>iyi</summary>
                <ul>
                    <li>yziyiosni</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>iea</summary>
                <ul>
                    <li>snieal</li>
                    <li>lfamieahch</li>
                    <li>liea</li>
                    <li>menieaciefen</li>
                    <li>snieal</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>iey</summary>
                <ul>
                    <li>kieyj</li>
                    <li>liey</li>
                    <li>stieyst</li>
                    <li>vieyj</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>iee</summary>
                <ul>
                    <li>dieest</li>
                    <li>fentetieesnolen</li>
                    <li>harmiees</li>
                    <li>klieeskero</li>
                    <li>tieesn</li>
                </ul>
            </details>
        </li>
            <li>
            <details open>
                <summary>ieo</summary>
                <ul>
                    <li>nieoticcael</li>
                    <li>klieo</li>
                    <li>sieod</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>iei</summary>
                <ul>
                    <li>nefphieili'avust</li>
                    <li>nultieit</li>
                    <li>snieist</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>ieu</summary>
                <ul>
                    <li>asvieu</li>
                    <li>ennynieum</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>iie</summary>
                <ul>
                    <li>fiie</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>iio</summary>
                <ul>
                    <li>juklohiioj</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>iiu</summary>
                <ul>
                    <li>akrantiium</li>
                    <li>faiium</li>
                    <li>foiium</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>iua</summary>
                <ul>
                    <li>desvegiuax</li>
                    <li>nabiua</li>
                    <li>nebiuaal</li>
                    <li>niuax-</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>iue</summary>
                <ul>
                    <li>yuesleone/iuesleone</li>
                    <li>l'iues</li>
                    <li>anfhiuera</li>
                    <li>liueiu</li>
                    <li>daliues</li>
                    <li>diueslexausoorl</li>
                    <li>liueiu</li>
                    <li>neiue</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>iuo</summary>
                <ul>
                    <li>diuosen</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>iui</summary>
                <ul>
                    <li>viuium</li>
                </ul>
            </details>
        </li>
    </ul>
</details>

### u-
<details open>
    <summary></summary>
    <ul>
        <li>
            <details open>
                <summary>uaa</summary>
                <ul>
                    <li>nebiuaal</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>uae</summary>
                <ul>
                    <li>muaes</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>uai</summary>
                <ul>
                    <li>iulauainium</li>
                    <li>puaien</li>
                    <li>sooduaines</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>uei</summary>
                <ul>
                    <li>liueiu</li>
                    <li>liueiu</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>ueu</summary>
                <ul>
                    <li>sykueurn</li>
                    <li>xesykueurn</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>uoi</summary>
                <ul>
                    <li>puoi</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>uie</summary>
                <ul>
                    <li>acelorvuies</li>
                    <li>delnuiel</li>
                    <li>nuiel</li>
                    <li>uies</li>
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>uiu</summary>
                <ul>
                    <li>juiust</li>
                    <li>viuium</li>
                </ul>
            </details>
        </li>
    </ul>
</details>

## 辞書コーパスから見つからなかったもの (43種)
<details open>
    <summary></summary>
    <ul>
        <li>aaa</li>
        <li>aay</li>
        <li>aae</li>
        <li>aao</li>
        <li>aai</li>
        <li>aau</li>
        <li>aya</li>
        <li>ayy</li>
        <li>ayo</li>
        <li>ayi</li>
        <li>ayu</li>
        <li>aey</li>
        <li>aee</li>
        <li>aeo</li>
        <li>aei</li>
        <li>aeu</li>
        <li>aoy</li>
        <li>aoo</li>
        <li>aou</li>
        <li>auy</li>
        <li>auo</li>
        <li>auu</li>
        <li>yaa</li>
        <li>yay</li>
        <li>yae</li>
        <li>yao</li>
        <li>yai</li>
        <li>yau</li>
        <li>yya</li>
        <li>yyy</li>
        <li>yye</li>
        <li>yyo</li>
        <li>yyi</li>
        <li>yyu</li>
        <li>yea</li>
        <li>yee</li>
        <li>yeo</li>
        <li>yei</li>
        <li>yoy</li>
        <li>yoe</li>
        <li>yoo</li>
        <li>yoi</li>
        <li>you</li>
        <li>yia</li>
        <li>yiy</li>
        <li>yii</li>
        <li>yua</li>
        <li>yuy</li>
        <li>yuo</li>
        <li>yuu</li>
        <li>eaa</li>
        <li>eay</li>
        <li>eao</li>
        <li>eyy</li>
        <li>eyi</li>
        <li>eyu</li>
        <li>eea</li>
        <li>eey</li>
        <li>eee</li>
        <li>eeo</li>
        <li>eei</li>
        <li>eoa</li>
        <li>eoy</li>
        <li>eoe</li>
        <li>eoo</li>
        <li>eoi</li>
        <li>eiy</li>
        <li>eio</li>
        <li>eii</li>
        <li>euy</li>
        <li>euo</li>
        <li>euu</li>
        <li>oaa</li>
        <li>oay</li>
        <li>oao</li>
        <li>oau</li>
        <li>oya</li>
        <li>oyy</li>
        <li>oye</li>
        <li>oyo</li>
        <li>oyi</li>
        <li>oyu</li>
        <li>oea</li>
        <li>oey</li>
        <li>oee</li>
        <li>oeo</li>
        <li>oei</li>
        <li>oeu</li>
        <li>ooa</li>
        <li>ooy</li>
        <li>ooe</li>
        <li>ooo</li>
        <li>ooi</li>
        <li>oou</li>
        <li>oio</li>
        <li>ouy</li>
        <li>oue</li>
        <li>ouo</li>
        <li>ouu</li>
        <li>iaa</li>
        <li>iya</li>
        <li>iyy</li>
        <li>iyo</li>
        <li>iyu</li>
        <li>ioa</li>
        <li>ioy</li>
        <li>ioe</li>
        <li>ioo</li>
        <li>ioi</li>
        <li>iou</li>
        <li>iia</li>
        <li>iiy</li>
        <li>iii</li>
        <li>iuy</li>
        <li>iuu</li>
        <li>uay</li>
        <li>uao</li>
        <li>uau</li>
        <li>uya</li>
        <li>uyy</li>
        <li>uye</li>
        <li>uyo</li>
        <li>uyi</li>
        <li>uyu</li>
        <li>uea</li>
        <li>uey</li>
        <li>uee</li>
        <li>ueo</li>
        <li>uoa</li>
        <li>uoy</li>
        <li>uoe</li>
        <li>uoo</li>
        <li>uou</li>
        <li>uia</li>
        <li>uiy</li>
        <li>uio</li>
        <li>uii</li>
        <li>uua</li>
        <li>uuy</li>
        <li>uue</li>
        <li>uuo</li>
        <li>uui</li>
        <li>uuu</li>
    </ul>
</details>
