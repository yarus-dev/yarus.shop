import { Heading, Text } from "@/components/typography";
import { cn } from "@/lib/styles";

export default async function ArticlePage() {
  return (
    <div className="flex flex-col container mx-auto sm:flex-row">
      <main className="flex-1">
        <article className={cn('max-w-prose')}>
          <Heading level="1">Elements</Heading>
          <Text>
            There are demos of library capabilities. From skeleton to media.
          </Text>
          <Text>
            If these're not enough take a look more{" "}
            <a href="#moar">at the end of the page</a>.
          </Text>
          <section>
            <Heading level="2">
              <a id="main" href="#main" aria-hidden="true" />
              Main
              </Heading>
              
            <Text>
              awsm.css contains styles for all really useful{" "}
              <abbr title="HyperText Markup Language is the standard markup language for creating web pages and web applications.">
                HTML5
              </abbr>{" "}
              skeleton tags. If you open the source code of this page you'll see
              all of them.
            </Text>
            <section>
              <h3>
                <a id="others" href="#others" aria-hidden="true" />
                What about others?
              </h3>
              <figure>
                <img src="https://igoradamenko.com/awsm.css/v2/images/cat.jpg" alt="Kitty" />
                <figcaption>
                  <code>figure</code> with kitten for your pleasure
                </figcaption>
              </figure>
              <Text>
                <code>div</code> isn't styled because it doesn't have semantic
                value (as well as <code>span</code> elements which aren't styled
                either)
              </Text>
              <aside>
                <Text>
                  <strong>N.B.</strong>{" "}
                  <a
                    href="http://html5doctor.com/cite-and-blockquote-reloaded/"
                    title="An article on html5doctor.com explains the right way of using quotes in HTML5"
                    target="_blank"
                  >
                    cite and blockquote – reloaded
                  </a>
                </Text>
              </aside>
              <Text>But for example quotes are really nice:</Text>
              <blockquote>
                <Text>
                  See, you not only have to be a good coder to create a system
                  like Linux, you have to be a sneaky bastard too.
                </Text>
                <footer>
                  — <cite>Linus Torvalds</cite>
                </footer>
              </blockquote>
              <Text>Yeah! They almost have no custom styles :)</Text>
            </section>
          </section>
          <section>
            <h2>
              <a id="lists" href="#lists" aria-hidden="true" />
              Lists
            </h2>
            <Text>There's boring unordered list of jedi masters:</Text>
            <ul>
              <li>Obi-Wan Kenobi</li>
              <li>Luke Skywalker</li>
              <li>Yoda</li>
            </ul>
            <Text>Let's rank them!</Text>
            <ol>
              <li>Luke Skywalker</li>
              <li>Yoda</li>
              <li>Obi-Wan Kenobi</li>
            </ol>
            <Text>And we also have description lists:</Text>
            <dl>
              <dt>Blizzard</dt>
              <dd>
                A howling blizzard is summoned to strike the opposing team. It
                may also freeze them solid.
              </dd>
              <dt>Hidden Power</dt>
              <dd>
                A unique attack that varies in type depending on the Pokémon
                using it.
              </dd>
              <dt>Waterfall</dt>
              <dd>
                The user charges at the target and may make it flinch. It can
                also be used to climb a waterfall.
              </dd>
            </dl>
          </section>
          <section>
            <h2>
              <a id="tables" href="#tables" aria-hidden="true" />
              Tables
            </h2>
            <Text>Let's look at Apple, Microsoft &amp; Google:</Text>
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Revenue</th>
                  <th>Number of employees</th>
                  <th>CEO</th>
                  <th>Founders</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Apple</td>
                  <td>US$&nbsp;215.639 billion</td>
                  <td>115,000</td>
                  <td>Tim Cook</td>
                  <td>Steve Jobs, Steve Wozniak, Ronald Wayne</td>
                </tr>
                <tr>
                  <td>Microsoft</td>
                  <td>US$&nbsp;85.32 billion</td>
                  <td>114,000</td>
                  <td>Satya Nadella</td>
                  <td>Bill Gates, Paul Allen</td>
                </tr>
                <tr>
                  <td>Google</td>
                  <td>US$&nbsp;74.54 billion</td>
                  <td>57,100</td>
                  <td>Sundar Pichai</td>
                  <td>Larry Page, Sergey Brin</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={5}>Total revenue: US$&nbsp;375.499 billion</td>
                </tr>
              </tfoot>
            </table>
            <Text>
              This table looks fine on mobile. Resize browser window and check
              this out!
            </Text>
          </section>
          <section>
            <h2>
              <a id="inlines" href="#inlines" aria-hidden="true" />
              Inlines
            </h2>
            <Text>
              <img src="https://igoradamenko.com/awsm.css/v2/images/surprised-cat.jpg" alt="Surprised cat" />
              The library has styles for <strong>strong</strong>,{" "}
              <em>emphasized</em> text and so on.
            </Text>
            <Text>
              Please note if you insert image inside <code>p</code> it'll be
              aligned to the right side. But if you insert image outside{" "}
              <code>p</code> it'll be aligned to the center. See example below.
            </Text>
            <hr />
            <Text>
              There are many others stylized inline tags in lib, but it would be
              boring to list them all.
            </Text>
            <img src="https://igoradamenko.com/awsm.css/v2/images/sleepy-cat.jpg" alt="Sleepy cat" />
          </section>
          <section>
            <h2>
              <a id="media" href="#media" aria-hidden="true" />
              Media
            </h2>
            <Text>View of audio and video depends on your browser.</Text>
            <aside>
              <Text>
                This is a background theme of{" "}
                <a
                  href="https://radio-t.com"
                  title="The famous Russian IT-podcast"
                  target="_blank"
                >
                  Radio-T
                </a>
                .
              </Text>
            </aside>
            <audio
              src="http://igoradamenko.com/github/awsm.css/radio-t.mp3"
              controls=""
              loop=""
            >
              It seems like your browser can't play this audio.
            </audio>
            <video
              src="http://igoradamenko.com/github/awsm.css/cats.mp4"
              controls=""
            >
              It seems like your browser can't play this video.
            </video>
          </section>
          <section>
            <h2>
              <a id="code" href="#code" aria-hidden="true" />
              Code
            </h2>
            <pre>
              <code>
                &lt;h2&gt;Code formatting&lt;/h2&gt;{"\n"}&lt;p&gt;If you need a
                good syntax highlight for your code, check the &lt;a title="Good
                plugins"
                href="plugins.html#highlightjs-prismjs"&gt;Plugins&lt;/a&gt;
                section.&lt;/p&gt;
              </code>
            </pre>
            <Text>
              If you need a good syntax highlight for your code, check the{" "}
              <a title="Good plugins" href="plugins.html#highlightjs-prismjs">
                Plugins
              </a>{" "}
              section.
            </Text>
          </section>
          <section>
            <h2>
              <a id="misc" href="#misc" aria-hidden="true" />
              Misc.
            </h2>
            <details>
              <summary>Show me the magic</summary>
              <Text>
                This simple spoiler does not work in Internet Explorer / Edge
                yet. Coming soon :)
              </Text>
              <Text>But now you can star the repo, why not? ^_^</Text>
              <Text>
                <span />
              </Text>
            </details>
            <noscript>
              This is an example of noscript but it seems like you'll never see
              that :)
            </noscript>
          </section>
        </article>
      </main>

      <nav className="order-first sm:w-32 bg-red-500">Sidebar</nav>

      <aside className="sm:w-32 bg-blue-500">Right Sidebar</aside>
    </div>
  );
}
