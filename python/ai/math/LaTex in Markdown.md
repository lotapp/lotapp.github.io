- [1.样式系列](#1样式系列)
        - [1.1.换行`\\`、空格`\:`](#11换行空格)
        - [1.2.居中`$$**$$`](#12居中)
        - [1.3.加粗（mathbf）、斜体（mathit）](#13加粗mathbf斜体mathit)
        - [1.4.大小](#14大小)
        - [~~1.5.颜色（有些编辑器不支持）~~](#15颜色有些编辑器不支持)
    - [2.常用数学](#2常用数学)
        - [2.1.常用表达式](#21常用表达式)
        - [2.2.附录：数学公式大全](#22附录数学公式大全)
    - [3.数学符号](#3数学符号)
        - [3.1.集合系列](#31集合系列)
        - [3.2.常用符号](#32常用符号)
        - [3.3.希腊字母表](#33希腊字母表)
        - [3.4.函数公式表](#34函数公式表)
        - [3.5.特殊符号-箭头系列](#35特殊符号-箭头系列)
    - [4.逆天常用](#4逆天常用)
        - [4.1.二次方程求解](#41二次方程求解)
        - [4.2.矩阵系列](#42矩阵系列)

上次写了Markdown，这次用到了LaTex，也出一期（吐槽，工作量比Markdown高太多...）

Markdown基础：<a href="https://www.cnblogs.com/dotnetcrazy/p/9180295.html" target="_blank">https://www.cnblogs.com/dotnetcrazy/p/9180295.html</a>

博客园LaTex开启：<a href="https://www.cnblogs.com/dotnetcrazy/p/9283971.html" target="_blank">https://www.cnblogs.com/dotnetcrazy/p/9283971.html</a>


在线预览：<a href="http://github.lesschina.com/python/ai/math/LaTex%20in%20Markdown.html" target="_blank">http://github.lesschina.com/python/ai/math/LaTex in Markdown.html</a>


# 1.样式系列

### 1.1.换行`\\`、空格`\:`

`$换行\\萌萌哒\:小明$`

$换行\\萌萌哒\:小明$

---

### 1.2.居中`$$**$$`

`$$萌萌哒$$`

$$萌萌哒$$

---

### 1.3.加粗（mathbf）、斜体（mathit）

```
$\mathbf{萌萌哒}$

$\mathit{小明}$
```

$\mathbf{萌萌哒}$

$\mathit{小明}$

---

### 1.4.大小

```
$\tiny 萌萌哒$

$\scriptsize 萌萌哒$

$\small 萌萌哒$

$\normalsize 萌萌哒(正常)$

$\large 萌萌哒$

$\Large 萌萌哒$

$\huge 萌萌哒$

$\Huge 萌萌哒$
```

$\tiny 萌萌哒$

$\scriptsize 萌萌哒$

$\small 萌萌哒$

$\normalsize 萌萌哒(正常)$

$\large 萌萌哒$

$\Large 萌萌哒$

$\huge 萌萌哒$

$\Huge 萌萌哒$

如果是单行写，记得加换行符号：
```
$\tiny 萌萌哒\\$
$\scriptsize 萌萌哒\\$
$\small 萌萌哒\\$
$\normalsize 萌萌哒(正常)\\$
$\large 萌萌哒\\$
$\Large 萌萌哒\\$
$\huge 萌萌哒\\$
$\Huge 萌萌哒\\$
```

### ~~1.5.颜色（有些编辑器不支持）~~

```
${\color[RGB]{255,0,0} Red}\\$
${\color[RGB]{30,144,255} Dodg Blue}\\$
${\color[RGB]{0,255,255} Aqua}\\$
${\color[RGB]{255,165,0} Orange}\\$
${\color[RGB]{255,69,0} Orange red}\\$
${\color[RGB]{0,128,0} Green}\\$
${\color[RGB]{128,128,128} Gray}\\$
${\color[RGB]{255,0,255} Magenta}\\$
${\color[RGB]{128,0,128} Purple}\\$
${\color[RGB]{184,134,11} Dark Gold}$
```

${\color[RGB]{255,69,0} Orange red}$

## 2.常用数学

### 2.1.常用表达式

| 常用数学                        | LaTex公式                         |
| ------------------------------- | --------------------------------- |
| $\sqrt{ab}$                     | `$\sqrt{ab}$`                     |
| $\sqrt[n]{ab}$                  | `$\sqrt[n]{ab}$`                  |
| $\log_{a}{b}$                   | `$\log_{a}{b}$`                   |
| $\lg{ab}$                       | `$\lg{ab}$`                       |
| $a^{b}$                         | `$a^{b}$`                         |
| $a_{b}$                         | `$a_{b}$`                         |
| $x_a^b$                         | `$x_a^b$`                         |
| $\int$                          | `$\int$`                          |
| $\int_{a}^{b}$                  | `$\int_{a}^{b}$`                  |
| $\oint$                         | `$\oint$`                         |
| $\oint_a^b$                     | `$\oint_a^b$`                     |
| $\sum$                          | `$\sum$`                          |
| $\sum_a^b$                      | `$\sum_a^b$`                      |
| $\coprod$                       | `$\coprod$`                       |
| $\coprod_a^b$                   | `$\coprod_a^b$`                   |
| $\prod$                         | `$\prod$`                         |
| $\prod_a^b$                     | `$\prod_a^b$`                     |
| $\bigcap$                       | `$\bigcap$`                       |
| $\bigcap_a^b$                   | `$\bigcap_a^b$`                   |
| $\bigcup$                       | `$\bigcup$`                       |
| $\bigcup_a^b$                   | `$\bigcup_a^b$`                   |
| $\bigsqcup$                     | `$\bigsqcup$`                     |
| $\bigsqcup_a^b$                 | `$\bigsqcup_a^b$`                 |
| $\bigvee$                       | `$\bigvee$`                       |
| $\bigvee_a^b$                   | `$\bigvee_a^b$`                   |
| $\bigwedge$                     | `$\bigwedge$`                     |
| $\bigwedge_a^b$                 | `$\bigwedge_a^b$`                 |
| $\widetilde{ab}$                | `$\widetilde{ab}$`                |
| $\widehat{ab}$                  | `$\widehat{ab}$`                  |
| $\overleftarrow{ab}$            | `$\overleftarrow{ab}$`            |
| $\overrightarrow{ab}$           | `$\overrightarrow{ab}$`           |
| $\overbrace{ab}$                | `$\overbrace{ab}$`                |
| $\underbrace{ab}$               | `$\underbrace{ab}$`               |
| $\underline{ab}$                | `$\underline{ab}$`                |
| $\overline{ab}$                 | `$\overline{ab}$`                 |
| $\frac{ab}{cd}$                 | `$\frac{ab}{cd}$`                 |
| $\frac{\partial a}{\partial b}$ | `$\frac{\partial a}{\partial b}$` |
| $\frac{\text{d}x}{\text{d}y}$   | `$\frac{\text{d}x}{\text{d}y}$`   |
| $\lim_{a \rightarrow b}$        | `$\lim_{a \rightarrow b}$`        |

### 2.2.附录：数学公式大全

| 数学公式                                                               | LaTex公式                                                                |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| $\displaystyle\sum\limits_{i=0}^n i^3$                                 | `$\displaystyle\sum\limits_{i=0}^n i^3$`                                 |
| $\left(\begin{array}{c}a\\ b\end{array}\right)$                        | `$\left(\begin{array}{c}a\\ b\end{array}\right)$`                        |
| $\left(\frac{a^2}{b^3}\right)$                                         | `$\left(\frac{a^2}{b^3}\right)$`                                         |
| $\left.\frac{a^3}{3}\right\lvert_0^1$                                      | `$\left.\frac{a^3}{3}\right\lvert_0^1$`                                       |
| $\begin{bmatrix}a & b \\c & d \end{bmatrix}$                           | `$\begin{bmatrix}a & b \\c & d \end{bmatrix}$`                           |
| $\begin{cases}a & x = 0\\b & x > 0\end{cases}$                         | `$\begin{cases}a & x = 0\\b & x > 0\end{cases}$`                         |
| $\sqrt{\frac{n}{n-1} S}$                                               | `$\sqrt{\frac{n}{n-1} S}$`                                               |
| $\begin{pmatrix} \alpha& \beta^{*}\\ \gamma^{*}& \delta \end{pmatrix}$ | `$\begin{pmatrix} \alpha& \beta^{*}\\ \gamma^{*}& \delta \end{pmatrix}$` |
| $A\:\xleftarrow{n+\mu-1}\:B$                                           | `$A\:\xleftarrow{n+\mu-1}\:B$`                                           |
| $B\:\xrightarrow[T]{n\pm i-1}\:C$                                      | `$B\:\xrightarrow[T]{n\pm i-1}\:C$`                                      |
| $\frac{1}{k}\log_2 c(f)\;$                                             | `$\frac{1}{k}\log_2 c(f)\;$`                                             |
| $\iint\limits_A f(x,y)\;$                                              | `$\iint\limits_A f(x,y)\;$`                                              |
| $x^n + y^n = z^n$                                                      | `$x^n + y^n = z^n$`                                                      |
| $E=mc^2$                                                               | `$E=mc^2$`                                                               |
| $e^{\pi i} - 1 = 0$                                                    | `$e^{\pi i} - 1 = 0$`                                                    |
| $p(x) = 3x^6$                                                          | `$p(x) = 3x^6$`                                                          |
| $3x + y =  12$                                                         | `$3x + y =  12$`                                                         |
| $\int_0^\infty \mathrm{e}^{-x}\,\mathrm{d}x$                           | `$\int_0^\infty \mathrm{e}^{-x}\,\mathrm{d}x$`                           |
| $\sqrt[n]{1+x+x^2+\ldots}$                                             | `$\sqrt[n]{1+x+x^2+\ldots}$`                                             |
| $\binom{x}{y} = \frac{x!}{y!(x-y)!}$                                   | `$\binom{x}{y} = \frac{x!}{y!(x-y)!}$`                                   |
| $\frac{\frac{1}{x}+\frac{1}{y}}{y-z}$                                  | `$\frac{\frac{1}{x}+\frac{1}{y}}{y-z}$`                                  |
| $f(x)=\frac{P(x)}{Q(x)}$                                               | `$f(x)=\frac{P(x)}{Q(x)}$`                                               |
| $\frac{1+\frac{a}{b}}{1+\frac{1}{1+\frac{1}{a}}}$                      | `$\frac{1+\frac{a}{b}}{1+\frac{1}{1+\frac{1}{a}}}$`                      |
| $\sum_{\substack{0\le i\le m\\ 0\lt j\lt n}} P(i,j)$                   | `$\sum_{\substack{0\le i\le m\\ 0\lt j\lt n}} P(i,j)$`                   |
| $\lim_{x \to \infty} \exp(-x) = 0$                                     | `$\lim_{x \to \infty} \exp(-x) = 0$`                                     |
| $\cos (2\theta) = \cos^2 \theta - \sin^2 \theta$                       | `$\cos (2\theta) = \cos^2 \theta - \sin^2 \theta$`                       |


## 3.数学符号

### 3.1.集合系列

| 运算符          | 公式              | 运算符           | 公式               | 运算符           | 公式               |
| --------------- | ----------------- | ---------------- | ------------------ | ---------------- | ------------------ |
| $\emptyset$     | `$\emptyset$`     | $\in$            | `$\in$`            | $\notin$         | `$\notin$`         |
| $\subset$       | `$\subset$`       | $\supset$        | `$\supset$`        | $\subseteq$      | `$\subseteq$`      |
| $\nsubseteq$    | `$\nsubseteq$`    | $\nsupseteq$     | `$\nsupseteq$`     | $\nsubseteqq$    | `$\nsubseteqq$`    |
| $\nsupseteqq$   | `$\nsupseteqq$`   | $\subsetneq$     | `$\subsetneq$`     | $\supsetneq$     | `$\supsetneq$`     |
| $\subsetneqq$   | `$\subsetneqq$`   | $\supsetneqq$    | `$\supsetneqq$`    | $\varsubsetneq$  | `$\varsubsetneq$`  |
| $\varsupsetneq$ | `$\varsupsetneq$` | $\varsubsetneqq$ | `$\varsubsetneqq$` | $\varsupsetneqq$ | `$\varsupsetneqq$` |
| $\bigcap$       | `$\bigcap$`       | $\bigcup$        | `$\bigcup$`        | $\bigvee$        | `$\bigvee$`        |
| $\bigwedge$     | `$\bigwedge$`     | $\biguplus$      | `$\biguplus$`      | $\bigsqcup$      | `$\bigsqcup$`      |
| $\Subset$       | `$\Subset$`       | $\Supset$        | `$\Supset$`        | $\subseteqq$     | `$\subseteqq$`     |
| $\supseteqq$    | `$\supseteqq$`    | $\sqsubset$      | `$\sqsubset$`      | $\sqsupset$      | `$\sqsupset$`      |

---

### 3.2.常用符号

| 基本符号         | 公式               | 基本符号          | 公式                | 基本符号        | 公式              |
| ---------------- | ------------------ | ----------------- | ------------------- | --------------- | ----------------- |
| $\cdot$          | `$\cdot$`          | $\vdots$          | `$\vdots$`          | $\grave{x}$     | `$\grave{x}$`     |
| $.$              | `$.$`              | $\ddots$          | `$\ddots$`          | $\breve{x}$     | `$\breve{x}$`     |
| $*$              | `$*$`              | $,$               | `$,$`               | $\dot{x}$       | `$\dot{x}$`       |
| $+$              | `$+$`              | $!$               | `$!$`               | $\widehat{xxx}$ | `$\widehat{xxx}$` |
| $-$              | `$-$`              | $;$               | `$;$`               | $\ddot{x}$      | `$\ddot{x}$`      |
| $\times$         | `$\times$`         | $?$               | `$?$`               | $\check{x}$     | `$\check{x}$`     |
| $\div$           | `$\div$`           | $\colon$          | `$\colon$`          | $\ddot{x}$      | `$\ddot{x}$`      |
| $=$              | `$=$`              | $\acute{x}$       | `$\acute{x}$`       | $\tilde{x}$     | `$\tilde{x}$`     |
| $\neq$           | `$\neq$`           | $\bar{x}$         | `$\bar{x}$`         | $\hat{x}$       | `$\hat{x}$`       |
| $\dotsm$         | `$\dotsm$`         | $\vec{x}$         | `$\vec{x}$`         | $\dddot{x}$     | `$\dddot{x}$`     |
| $\dotso$         | `$\dotso$`         | $\widetilde{xxx}$ | `$\widetilde{xxx}$` | $\backslash$    | `$\backslash$`    |
| $/$              | `$/$`              | $\bracevert$      | `$\bracevert$`      | $]$             | `$]$`             |
| $\smallsetminus$ | `$\smallsetminus$` | $\lVert$          | `$\lVert$`          | $\lbrace$       | `$\lbrace$`       |
| $\arrowvert$     | `$\arrowvert$`     | $\rVert$          | `$\rVert$`          | $\rbrace$       | `$\rbrace$`       |
| $\lvert$         | $\lvert$           | $\lgroup$         | `$\lgroup$`         | $\langle$       | `$\langle$`       |
| $\lvert$         | `$\lvert$`         | $\rgroup$         | `$\rgroup$`         | $\rangle$       | `$\rangle$`       |
| $\rvert$         | `$\rvert$`         | $[$               | `$[$`               | $\lmoustache$   | `$\lmoustache$`   |
| $\rmoustache$    | `$\rmoustache$`    | $\lceil$          | `$\lceil$`          | $\rceil$        | `$\rceil$`        |
| $\lfloor$        | `$\lfloor$`        | $\rfloor$         | `$\rfloor$`         |

---

### 3.3.希腊字母表

| 字母          | 公式            | 字母        | 公式          | 字母        | 公式          |
| ------------- | --------------- | ----------- | ------------- | ----------- | ------------- |
| $\alpha$      | `$\alpha$`      | $\beta$     | `$\beta$`     | $\chi$      | `$\chi$`      |
| $\delta$      | `$\delta$`      | $\Delta$    | `$\Delta$`    | $\epsilon$  | `$\epsilon$`  |
| $\eta$        | `$\eta$`        | $\Gamma$    | `$\Gamma$`    | $\iota$     | `$\iota$`     |
| $\kappa$      | `$\kappa$`      | $\lambda$   | `$\lambda$`   | $\Lambda$   | `$\Lambda$`   |
| $\mu$         | `$\mu$`         | $\nabla$    | `$\nabla$`    | $\nu$       | `$\nu$`       |
| $\omega$      | `$\omega$`      | $\Omega$    | `$\Omega$`    | $\phi$      | `$\phi$`      |
| $\Phi$        | `$\Phi$`        | $\pi$       | `$\pi$`       | $\Pi$       | `$\Pi$`       |
| $\psi$        | `$\psi$`        | $\Psi$      | `$\Psi$`      | $\rho$      | `$\rho$`      |
| $\sigma$      | `$\sigma$`      | $\Sigma$    | `$\Sigma$`    | $\tau$      | `$\tau$`      |
| $\theta$      | `$\theta$`      | $\Theta$    | `$\Theta$`    | $\upsilon$  | `$\upsilon$`  |
| $\varepsilon$ | `$\varepsilon$` | $\varsigma$ | `$\varsigma$` | $\vartheta$ | `$\vartheta$` |
| $\xi$         | `$\xi$`         | $\zeta$     | `$\zeta$`     |

---

### 3.4.函数公式表

| 函数              | 公式                | 函数         | 公式           | 函数          | 公式            |
| ----------------- | ------------------- | ------------ | -------------- | ------------- | --------------- |
| $\sin$            | `$\sin$`            | $\sin^{-1}$  | `$\sin^{-1}$`  | $\inf$        | `$\inf$`        |
| $\cos$            | `$\cos$`            | $\cos^{-1}$  | `$\cos^{-1}$`  | $\arg$        | `$\arg$`        |
| $\tan$            | `$\tan$`            | $\tan^{-1}$  | `$\tan^{-1}$`  | $\det$        | `$\det$`        |
| $\sinh$           | `$\sinh$`           | $\sinh^{-1}$ | `$\sinh^{-1}$` | $\dim$        | `$\dim$`        |
| $\cosh$           | `$\cosh$`           | $\cosh^{-1}$ | `$\cosh^{-1}$` | $\gcd$        | `$\gcd$`        |
| $\tanh$           | `$\tanh$`           | $\tanh^{-1}$ | `$\tanh^{-1}$` | $\hom$        | `$\hom$`        |
| $\csc$            | `$\csc$`            | $\exp$       | `$\exp$`       | $\ker$        | `$\ker$`        |
| $\sec$            | `$\sec$`            | $\lg$        | `$\lg$`        | $\Pr$         | `$\Pr$`         |
| $\cot$            | `$\cot$`            | $\ln$        | `$\ln$`        | $\sup$        | `$\sup$`        |
| $\coth$           | `$\coth$`           | $\log$       | `$\log$`       | $\deg$        | `$\deg$`        |
| $\hom$            | `$\hom$`            | $\log_{e}$   | `$\log_{e}$`   | $\injlim$     | `$\injlim$`     |
| $\arcsin$         | `$\arcsin$`         | $\log_{10}$  | `$\log_{10}$`  | $\varinjlim$  | `$\varinjlim$`  |
| $\arccos$         | `$\arccos$`         | $\lim$       | `$\lim$`       | $\varprojlim$ | `$\varprojlim$` |
| $\det$            | `$\det$`            | $\liminf$    | `$\liminf$`    | $\varliminf$  | `$\varliminf$`  |
| $\arctan$         | `$\arctan$`         | $\limsup$    | `$\limsup$`    | $\projlim$    | `$\projlim$`    |
| $\textrm{arccsc}$ | `$\textrm{arccsc}$` | $\max$       | `$\max$`       | $\varlimsup$  | `$\varlimsup$`  |
| $\textrm{arcsec}$ | `$\textrm{arcsec}$` | $\min$       | `$\min$`       |
| $\textrm{arccot}$ | `$\textrm{arccot}$` | $\infty$     | `$\infty$`     |

---

### 3.5.特殊符号-箭头系列

---

| 箭头                | 公式                  | 箭头                  | 公式                    | 箭头                   | 公式                     |
| ------------------- | --------------------- | --------------------- | ----------------------- | ---------------------- | ------------------------ |
| $\uparrow$          | `$\uparrow$`          | $\longleftarrow$      | `$\longleftarrow$`      | $\downdownarrows$      | `$\downdownarrows$`      |
| $\downarrow$        | `$\downarrow$`        | $\longrightarrow$     | `$\longrightarrow$`     | $\upuparrows$          | `$\upuparrows$`          |
| $\updownarrow$      | `$\updownarrow$`      | $\rightarrow$         | `$\rightarrow$`         | $\rightharpoondown$    | `$\rightharpoondown$`    |
| $\Uparrow$          | `$\Uparrow$`          | $\leftarrow$          | `$\leftarrow$`          | $\downharpoonleft$     | `$\downharpoonleft$`     |
| $\Downarrow$        | `$\Downarrow$`        | $\mapsto$             | `$\mapsto$`             | $\rightharpoonup$      | `$\rightharpoonup$`      |
| $\Leftarrow$        | `$\Leftarrow$`        | $\nrightarrow$        | `$\nrightarrow$`        | $\downharpoonright$    | `$\downharpoonright$`    |
| $\Rightarrow$       | `$\Rightarrow$`       | $\nleftarrow$         | `$\nleftarrow$`         | $\upharpoonleft$       | `$\upharpoonleft$`       |
| $\Leftrightarrow$   | `$\Leftrightarrow$`   | $\rightrightarrows$   | `$\rightrightarrows$`   | $\upharpoonright$      | `$\upharpoonright$`      |
| $\nLeftrightarrow$  | `$\nLeftrightarrow$`  | $\leftleftarrows$     | `$\leftleftarrows$`     | $\leftharpoondown$     | `$\leftharpoondown$`     |
| $\nLeftarrow$       | `$\nLeftarrow$`       | $\rightleftarrows$    | `$\rightleftarrows$`    | $\leftharpoonup$       | `$\leftharpoonup$`       |
| $\nRightarrow$      | `$\nRightarrow$`      | $\leftrightarrows$    | `$\leftrightarrows$`    | $\hookleftarrow$       | `$\hookleftarrow$`       |
| $\Updownarrow$      | `$\Updownarrow$`      | $\curvearrowleft$     | `$\curvearrowleft$`     | $\hookrightarrow$      | `$\hookrightarrow$`      |
| $\circlearrowleft$  | `$\circlearrowleft$`  | $\curvearrowright$    | `$\curvearrowright$`    | $\rightleftharpoons$   | `$\rightleftharpoons$`   |
| $\circlearrowright$ | `$\circlearrowright$` | $\Longleftarrow$      | `$\Longleftarrow$`      | $\leftrightharpoons$   | `$\leftrightharpoons$`   |
| $\Lleftarrow$       | `$\Lleftarrow$`       | $\Longrightarrow$     | `$\Longrightarrow$`     | $\looparrowleft$       | `$\looparrowleft$`       |
| $\Rrightarrow$      | `$\Rrightarrow$`      | $\longleftrightarrow$ | `$\longleftrightarrow$` | $\looparrowright$      | `$\looparrowright$`      |
| $\nwarrow$          | `$\nwarrow$`          | $\Longleftrightarrow$ | `$\Longleftrightarrow$` | $\rightsquigarrow$     | `$\rightsquigarrow$`     |
| $\swarrow$          | `$\swarrow$`          | $\longmapsto$         | `$\longmapsto$`         | $\Lsh$                 | `$\Lsh$`                 |
| $\searrow$          | `$\searrow$`          | $\rightarrowtail$     | `$\rightarrowtail$`     | $\Rsh$                 | `$\Rsh$`                 |
| $\nearrow$          | `$\nearrow$`          | $\leftarrowtail$      | `$\leftarrowtail$`      | $\multimap$            | `$\multimap$`            |
| $\twoheadleftarrow$ | `$\twoheadleftarrow$` | $\twoheadrightarrow$  | `$\twoheadrightarrow$`    | $\leftrightsquigarrow$ | `$\leftrightsquigarrow$` |
| $\leftrightarrow$   | `$\leftrightarrow$`   | $\nleftrightarrow$    | `$\nleftrightarrow$`    |


## 4.逆天常用

逆天用到就添加进去（不定期更新）根据上面有的，这些其实都可以自己写出来的

### 4.1.二次方程求解

```
$\mathbf{a*x^2+b*x+c}$

$$x={\frac{-b \pm \sqrt{b^2-4ac}}{2a}}$$ or $$x = {-b \pm \sqrt{b^2-4ac} \over 2a}$$
```

$\mathbf{a*x^2+b*x+c}$

$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}$$

---

### 4.2.矩阵系列

```
$$
\begin{bmatrix}
1&0&0 \\
0&1&0 \\
0&0&1
\end{bmatrix}
$$
```

$$
\begin{bmatrix}
1&0&0 \\
0&1&0 \\
0&0&1
\end{bmatrix}
$$

---

