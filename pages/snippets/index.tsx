import { HeadingSection } from '@/components/HeadingSection';
import { Layout } from '@/components/Layout';
import { Seo } from '@/components/Seo';
import { x } from '@xstyled/styled-components';

export default function Snippets() {
  return (
    <Layout>
      <Seo
        title="My Snippets | Dean Bowler"
        description="various code snippets I've written"
      />
      <HeadingSection>
        <x.div row justifyContent={{ sm: 'center' }} my={5} mx={4}>
          <x.div col={{ sm: 3 / 4, md: 2 / 3 }}>
            <x.h1 fontWeight="lighter" fontSize={{ xs: '5xl', sm: '6xl' }} m={0}>
              Snippets
            </x.h1>
            <x.h2 fontWeight="normal" fontSize={{ xs: 'xl', sm: '2xl' }} m={0}>
              Various code snippets I&apos;ve written
            </x.h2>
          </x.div>
        </x.div>
      </HeadingSection>
      <x.div alignContent={{ sm: 'center' }} my={4} mx={4}>
        <x.h3 fontWeight="normal">Git Aliases</x.h3>
        <x.div backgroundColor="rgba(0,0,0,0.25)" p={3} borderRadius="md">
          <x.code whiteSpace="pre-line" overflow="auto">
            {`lg = log --all --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit
              blg = log origin/master..HEAD --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit
              amend = commit --amend --no-edit
              afp = "!git amend; git fp"
              fp = push --force
              fap = "!git fetch; git pull"
              rom = rebase origin/master
              room = rebase --onto origin/master
              from = "!git fetch; git rom"
              froom = "!git fetch; git room"
              wip = commit -am WIP
              st = status -sb
              rc = rebase --continue
              ra = rebase --abort
              cb = checkout -b
              br = branch -m
              up = "!git remote update -p; git merge --ff-only @{u}"
              mup = "!git checkout master; git up"
              cbm = "!git mup; git cb"
              cam = !git commit -a -m
              ca = !git commit -a`}
          </x.code>
        </x.div>
      </x.div>
    </Layout>
  );
}
